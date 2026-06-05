/* ──────────────────────────────────────────────────────────────────────────
   NEST — "Explore the benchmark" data
   One object per example clip. Loaded via <script src="./data.js"> so it works
   when opening index.html directly (file://) — unlike fetch().

   Question levels:
     • contextual / behavioral / interpersonal  → MULTIPLE CHOICE
         provide `options: [...]` and `answer:` (must equal one of the options)
     • open                                      → FREE TEXT
         provide `a:` (the reference description); no options

   Optional per question: `region: {x,y,w,h}` in PERCENT of the media area —
   highlighted on the media when you hover that question card.

   NOTE: the two examples below are PLACEHOLDERS so the viewer renders. They get
   replaced by the real dataframe + cleared clips.
   ────────────────────────────────────────────────────────────────────────── */
const EXAMPLES = [
  {
    id: "library",
    video: "./figures/graphical_abstract/nest_eg_h264.mp4",
    poster: "./figures/pull_clip_poster.jpg",
    caption: "Two toddlers and an adult in a library (placeholder example).",
    participants: [
      { label: "person red",   color: "#ef4444" },
      { label: "person green", color: "#22c55e" },
    ],
    questions: [
      { level: "contextual",
        q: "Where are person red and green?",
        options: ["In a library", "In a kitchen", "On a playground", "In a car"],
        answer: "In a library" },
      { level: "behavioral",
        q: "What does person red do?",
        options: ["Points at person green’s book", "Claps their hands", "Reads a book", "Waves goodbye"],
        answer: "Points at person green’s book" },
      { level: "interpersonal",
        q: "How does person green respond?",
        options: ["Frowns and pushes red", "Smiles and hugs red", "Ignores red", "Offers the book"],
        answer: "Frowns and pushes red" },
      { level: "open",
        q: "Describe the whole interaction.",
        a: "Person red and green are in a library. Person red points to person green’s book; person green frowns and pushes red. An adult comes over to intervene." },
    ],
  },

  {
    id: "cup",
    video: null,                                   // no cleared clip yet → poster fallback
    poster: "./figures/interactive_frames/frame2.jpg",
    caption: "Adult–child interaction at a table (placeholder still).",
    participants: [
      { label: "child", color: "#5887B0" },
      { label: "adult", color: "#89759C" },
    ],
    questions: [
      { level: "contextual",
        q: "Where are they?",
        options: ["At a table indoors", "Outside in a yard", "In a swimming pool", "In a car"],
        answer: "At a table indoors" },
      { level: "behavioral",
        q: "What is the child doing?",
        options: ["Pointing at the glass cup", "Drinking from a bottle", "Clapping", "Sleeping"],
        answer: "Pointing at the glass cup" },
      { level: "interpersonal",
        q: "How does the adult respond to the point?",
        options: ["Looks surprised, then grabs the cup", "Walks away", "Laughs out loud", "Does nothing"],
        answer: "Looks surprised, then grabs the cup" },
      { level: "open",
        q: "Describe the whole interaction.",
        a: "The child points at the glass cup; the adult notices, looks surprised, and grabs it for them." },
    ],
  },
];
