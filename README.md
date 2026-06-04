# NEST project website

Static project page for **NEST** — *Before Words, Beyond Speech: Evaluating
Nonverbal Social Reasoning in Early Childhood*.

Plain HTML — **no build step, no node, no framework**. Tailwind is loaded from a
CDN, so editing is just editing `index.html`.

## Structure

```
index.html      # the whole page
figures/        # schema diagrams / teaser images (referenced as ./figures/…)
videos/         # cleared example clips, .mp4 (referenced as ./videos/…)
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
- Fill in the real link URLs (Paper / arXiv / Code / Data) and the results table.

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
