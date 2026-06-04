/* ──────────────────────────────────────────────────────────────────────────
   NEST — question-viewer data
   Add one object per example clip. Loaded via <script src="./data.js"> so it
   works even when opening index.html directly (file://) — unlike fetch().

   Each `region` is a box in PERCENT of the media area {x, y, w, h}, so it
   scales with the image. Omit `region` for questions with no specific area.
   ────────────────────────────────────────────────────────────────────────── */
const EXAMPLES = [
  {
    id: "cup",
    // No cleared clip dropped in yet → falls back to this poster image.
    // When ready: video: "./videos/cup.mp4",
    video: null,
    poster: "./figures/interactive_frames/frame2.jpg",
    caption: "Adult–child interaction at a table (placeholder still — swap for cleared clip).",
    participants: [
      { label: "child", color: "var(--blue-d)" },
      { label: "adult", color: "var(--purple-d)" },
    ],
    questions: [
      { level: "contextual",    q: "Where are they?",
        a: "Indoors, sitting around a table.",
        region: { x: 2, y: 2, w: 96, h: 28 } },
      { level: "behavioral",    q: "What is the child doing?",
        a: "Pointing at the glass cup on the tray.",
        region: { x: 32, y: 40, w: 30, h: 45 } },
      { level: "interpersonal", q: "How does the adult respond to the point?",
        a: "Looks surprised, then reaches for the cup.",
        region: { x: 2, y: 25, w: 32, h: 65 } },
      { level: "open",          q: "Describe the whole interaction.",
        a: "The child points at the glass cup; the adult notices, looks surprised, and grabs it for them." },
    ],
  },

  // ── template — copy this block per new clip ──────────────────────────────
  // {
  //   id: "clip2",
  //   video: "./videos/clip2.mp4",
  //   poster: "./figures/clip2-poster.jpg",
  //   caption: "…",
  //   participants: [{ label: "red", color: "var(--blue-d)" }],
  //   questions: [
  //     { level: "contextual",    q: "…", a: "…", region: { x: 0, y: 0, w: 100, h: 100 } },
  //     { level: "behavioral",    q: "…", a: "…" },
  //     { level: "interpersonal", q: "…", a: "…" },
  //     { level: "open",          q: "…", a: "…" },
  //   ],
  // },
];
