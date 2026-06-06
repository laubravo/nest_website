#!/usr/bin/env python3
"""
Regenerate the leaderboard data in index.html from the LaTeX results table.

Usage (from the repo root):
    python3 scripts/update_leaderboard.py
    python3 scripts/update_leaderboard.py --tex tables/main.tex --html index.html

It parses the `\\begin{tabular}` in tables/main.tex and rewrites the
`const RESULTS = [...]` block in index.html (between the LEADERBOARD:START /
LEADERBOARD:END markers). Edit the .tex, re-run this, refresh the page.

Expected column order in the .tex (per data row):
    Model & Size & age & loc & main & CtxAvg
          & object & shared & event & BehAvg
          & react & cause & conseq & InterAvg
          & All & sim & recall
Only CtxAvg, BehAvg, InterAvg, All, sim, recall are pulled into the table.
"""
import argparse, re, sys
from pathlib import Path

# indices into the &-split cells of a data row
COL = {'ctx': 5, 'beh': 9, 'inter': 13, 'all': 14, 'sim': 15, 'rec': 16}


def clean(cell: str) -> str:
    """Strip LaTeX decorations from a cell, leaving the bare text/number."""
    c = re.sub(r'\\cellcolor\[[^\]]*\]\{[^}]*\}', '', cell)   # \cellcolor[rgb]{...}
    c = re.sub(r'\\textbf\{([^}]*)\}', r'\1', c)              # \textbf{x} -> x
    c = re.sub(r'\\underline\{([^}]*)\}', r'\1', c)           # \underline{x} -> x
    c = re.sub(r'\\[a-zA-Z]+', '', c)                         # any other \command
    return c.replace('{', '').replace('}', '').strip()


def num(cell: str):
    """Return the numeric token in a cell as a string, or None for '--'."""
    c = clean(cell)
    if c in ('--', '-', ''):
        return None
    m = re.search(r'-?\d+(?:\.\d+)?', c)
    return m.group(0) if m else None


def parse_tex(tex: str):
    rows, group = [], None
    for raw in tex.split('\\\\'):                       # split on the LaTeX row end '\\'
        frag = re.sub(r'\\(top|mid|bottom)rule', '', raw)
        frag = re.sub(r'\\cmidrule(?:\([^)]*\))?\{[^}]*\}', '', frag)
        frag = re.sub(r'\\(begin|end)\{tabular\}(?:\{[^}]*\})?', '', frag).strip()
        if not frag:
            continue
        if '\\multicolumn' in frag:                     # section label or header row
            if 'Open-source' in frag:
                group = 'oss'
            elif 'Closed-source' in frag:
                group = 'api'
            continue
        if '\\shortstack' in frag or '&' not in frag:   # second header row / non-data
            continue
        cells = frag.split('&')
        if len(cells) <= COL['rec']:
            continue
        model = clean(cells[0])
        if not model or model.lower() == 'model':
            continue
        entry = {'model': model, 'size': clean(cells[1]) or '--',
                 'human': model.lower() == 'human', 'api': group == 'api'}
        for k, i in COL.items():
            entry[k] = num(cells[i])
        rows.append(entry)
    return rows


def js_array(rows) -> str:
    out = ['      const RESULTS = [']
    for e in rows:
        parts = [f"model:'{e['model']}'", f"size:'{e['size']}'"]
        if e['human']:
            parts.append('human:true')
        elif e['api']:
            parts.append('api:true')
        for k in ('ctx', 'beh', 'inter', 'all', 'sim', 'rec'):
            v = e[k]
            parts.append(f"{k}:{v if v is not None else 'null'}")
        out.append('        {' + ', '.join(parts) + '},')
    out.append('      ];')
    return '\n'.join(out)


def main():
    root = Path(__file__).resolve().parent.parent
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--tex', default=str(root / 'tables' / 'main.tex'))
    ap.add_argument('--html', default=str(root / 'index.html'))
    args = ap.parse_args()

    rows = parse_tex(Path(args.tex).read_text())
    if not rows:
        sys.exit('No data rows parsed from ' + args.tex)

    html = Path(args.html).read_text()
    s = html.find('/* LEADERBOARD:START')
    e = html.find('/* LEADERBOARD:END')
    if s < 0 or e < 0:
        sys.exit('LEADERBOARD:START/END markers not found in ' + args.html)
    s_end = html.index('*/', s) + 2                     # end of the START marker line
    e_line = html.rfind('\n', 0, e) + 1                 # start of the END marker line
    new_html = html[:s_end] + '\n' + js_array(rows) + '\n' + html[e_line:]
    Path(args.html).write_text(new_html)

    print(f'Updated {args.html}: {len(rows)} rows '
          f"({sum(1 for r in rows if r['human'])} human, "
          f"{sum(1 for r in rows if r['api'])} API, "
          f"{sum(1 for r in rows if not r['human'] and not r['api'])} open-source).")
    for r in rows:
        tag = 'human' if r['human'] else ('API' if r['api'] else 'oss')
        print(f"  {r['model']:<24} {r['size']:>4}  ctx={r['ctx']} beh={r['beh']} "
              f"inter={r['inter']} all={r['all']} sim={r['sim']} rec={r['rec']}  [{tag}]")


if __name__ == '__main__':
    main()
