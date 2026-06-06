import csv, json
csv.field_size_limit(10**7)
rows=[r for r in csv.DictReader(open('tables/hf_dataset.txt'))]
picks=['childplay0001_seg01','childplay0040_seg02','childplay0017_seg05','childplay0026_seg04','childplay0032_seg03']
byseg={}
for r in rows: byseg.setdefault(r['segment_id'],[]).append(r)

COLOR={'red':'#ef4444','green':'#22c55e','blue':'#3b82f6','yellow':'#eab308',
       'magenta':'#d946ef','purple':'#a855f7','orange':'#f97316'}
def strip(opt):
    o=opt.strip()
    if len(o)>2 and o[0].isalpha() and o[1] in '.)': return o[2:].strip()
    return o
def mcq(r):
    opts=[strip(o) for o in json.loads(r['options'])]
    raw=json.loads(r['options']); ans=None
    for o in raw:
        if o.strip()[:2] in (r['ground_truth']+'.', r['ground_truth']+')'): ans=strip(o)
    return opts, ans
def pick(qs, grp, want=None, needle=None):
    cands=[q for q in qs if q['question_group']==grp]
    if want: cands=[q for q in cands if q['subtype']==want] or cands
    if needle: cands=[q for q in cands if needle in q['question_text'].lower()] or cands
    return cands[0]

out=[]
for s in picks:
    qs=byseg[s]
    ppl=json.loads(qs[0]['descriptions'])
    participants=[{'label':'person '+k,'color':COLOR.get(k,'#64748b'),'desc':v} for k,v in ppl.items()]
    c=pick(qs,'contextual','location')
    b=pick(qs,'behavioral','event_at_time','doing')
    i=pick(qs,'interpersonal','consequence')
    o=pick(qs,'open_interactions')
    mc=pick(qs,'contextual','main_activity')
    cap=strip(mcq(mc)[1] or '')
    qlist=[]
    for r,lvl in [(c,'contextual'),(b,'behavioral'),(i,'interpersonal')]:
        opts,ans=mcq(r)
        qlist.append({'level':lvl,'q':r['question_text'],'options':opts,'answer':ans})
    qlist.append({'level':'open','q':o['question_text'],'a':o['ground_truth']})
    out.append({'id':s,'video':'./videos/'+s+'.mp4','poster':'./figures/posters/'+s+'.jpg',
                'caption':cap,'participants':participants,'questions':qlist})

hdr='''/* ──────────────────────────────────────────────────────────────────────────
   NEST — "Explore the benchmark" data  (AUTO-GENERATED from tables/hf_dataset.txt)
   5 childplay examples, one representative question per level.
   Drop the clips into videos/<segment_id>.mp4 (H.264). Re-run the generator to
   refresh. Levels: contextual/behavioral/interpersonal = MCQ; open = free text.
   ────────────────────────────────────────────────────────────────────────── */
const EXAMPLES = '''
open('data.js','w').write(hdr+json.dumps(out,indent=2,ensure_ascii=False)+';\n')
print('wrote data.js with', len(out), 'examples')
for e in out:
    print('—', e['id'], '|', len(e['participants']),'ppl |', e['caption'])
    for q in e['questions']:
        a=q.get('answer') or (q.get('a','')[:60]+'…')
        print('    '+q['level'][:5], '·', q['q'][:70])
        print('         →', a[:70])
