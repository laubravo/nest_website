# NEST project website

Static project page for **NEST** — *Before Words, Beyond Speech: Evaluating
Nonverbal Social Reasoning in Early Childhood*.

Plain HTML — **no build step, no node, no framework**. Tailwind is loaded from a
CDN, so editing is just editing `index.html`.

## Structure

```
index.html      # the whole page
hierarchy.html  # the interaction-hierarchy widget (embedded via iframe)
data.js         # "Explore the benchmark" examples (auto-generated, see below)
figures/        # diagrams, result SVGs, posters (referenced as ./figures/…)
videos/         # cleared example clips, H.264 .mp4 (referenced as ./videos/…)
fonts/          # local Quicksand (used by hierarchy.html)
tables/         # data sources: hf_dataset.txt (benchmark CSV), main.tex (results table)
scripts/        # regeneration scripts (see below)
.nojekyll       # tell GitHub Pages to serve files as-is (no Jekyll processing)
```

## Local preview

Just open the file — no server needed:

```sh
open index.html
```

(Or `python3 -m http.server` in this folder and visit http://localhost:8000 if
you prefer serving over HTTP.)

## Adding content

- **Figures:** drop image files in `figures/`, reference with `./figures/name.png`.
- **Clips:** drop `.mp4` files in `videos/`, then swap a placeholder in the
  "Explore the benchmark" section for:
  ```html
  <video controls preload="metadata" poster="./figures/clip1-poster.jpg"
         class="aspect-video w-full rounded-xl">
    <source src="./videos/clip1.mp4" type="video/mp4" />
  </video>
  ```
- Replace the `[filler]`-tagged text with final copy from the paper.
- Fill in the real link URLs (Paper / arXiv / Code / Data).
- **Videos must be H.264** (browsers can't play MPEG-4 Part 2); transcode with
  `avconvert -p Preset1280x720 -s in.mp4 -o out.mp4`.

## Regenerating data

Two tables are generated from sources in `tables/` — edit the source, re-run the
script, refresh the page (no build step):

```sh
# Leaderboard ← tables/main.tex  (rewrites the RESULTS array in index.html,
#                                 between the LEADERBOARD:START/END markers)
python3 scripts/update_leaderboard.py

# Explore examples ← tables/hf_dataset.txt  (rewrites data.js for the 5 picked
#                                            childplay segments)
python3 scripts/update_examples.py
```

## Deploy (GitHub Pages)

No deploy script — Pages serves the static files directly.

```sh
git add -A
git commit -m "Update site"
git push
```

Then in the repo on GitHub: **Settings → Pages → Build and deployment →
Source: "Deploy from a branch" → Branch: `main` / root**.

Live at: https://laubravo.github.io/nest_website/
