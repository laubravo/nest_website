/* ──────────────────────────────────────────────────────────────────────────
   NEST — "Explore the benchmark" data  (AUTO-GENERATED from tables/hf_dataset.txt)
   5 childplay examples, one representative question per level.
   Drop the clips into videos/<segment_id>.mp4 (H.264). Re-run the generator to
   refresh. Levels: contextual/behavioral/interpersonal = MCQ; open = free text.
   ────────────────────────────────────────────────────────────────────────── */
const EXAMPLES = [
  {
    "id": "childplay0001_seg01",
    "video": "./videos/childplay0001_seg01.mp4",
    "poster": "./figures/posters/childplay0001_seg01.jpg",
    "caption": "Playing with a pink plastic toy tea set.",
    "participants": [
      {
        "label": "person green",
        "color": "#22c55e",
        "desc": "an adult with shoulder-length reddish-brown hair wearing a black and pink patterned blouse"
      },
      {
        "label": "person red",
        "color": "#ef4444",
        "desc": "a toddler with short blond hair wearing a blue striped shirt"
      }
    ],
    "questions": [
      {
        "level": "contextual",
        "q": "Where is the scene taking place?",
        "options": [
          "in a room on the floor.",
          "on a living room sofa with cushions.",
          "in a playroom on a colorful rug.",
          "on a bedroom bed with pillows."
        ],
        "answer": "in a room on the floor."
      },
      {
        "level": "behavioral",
        "q": "What is person red doing between seconds 0.0 and 1.0?",
        "options": [
          "Person red hands person green the pink toy tea pot.",
          "Person red pours pretend tea from the pink tea pot into the cup held by person green.",
          "Person red places the pink tea cup on the elmo toy's head.",
          "Person green hands person red the pink tea cup."
        ],
        "answer": "Person red hands person green the pink toy tea pot."
      },
      {
        "level": "interpersonal",
        "q": "After second 0.0, how does person green respond to person red handing person green the pink toy tea pot?",
        "options": [
          "Person green responds by picking up the pink tea cup and extending it toward person red.",
          "Person green responds by taking the teapot.",
          "Person green responds by giving the plastic pink tea cup to person red.",
          "Person green responds by looking down at the teapot and then turning their head away from person red."
        ],
        "answer": "Person green responds by taking the teapot."
      },
      {
        "level": "open",
        "q": "Describe the main interactions in this scene involving person red, person green.",
        "a": "Person red hands person green a pink plastic tea pot. Person green takes it, then picks up a pink plastic tea cup, and gives it to person red. Person red slumps and focuses their attention at something off-camera."
      }
    ]
  },
  {
    "id": "childplay0040_seg02",
    "video": "./videos/childplay0040_seg02.mp4",
    "poster": "./figures/posters/childplay0040_seg02.jpg",
    "caption": "Playing with animal toy figurines.",
    "participants": [
      {
        "label": "person green",
        "color": "#22c55e",
        "desc": "an adult with brown hair in a ponytail wearing a floral shirt"
      },
      {
        "label": "person red",
        "color": "#ef4444",
        "desc": "a toddler in a striped shirt and gray pants"
      }
    ],
    "questions": [
      {
        "level": "contextual",
        "q": "Where is the scene taking place?",
        "options": [
          "inside a bedroom, sitting on a bed.",
          "inside, sitting on the floor.",
          "inside a kitchen, sitting on a stool.",
          "inside a living room, sitting on a couch."
        ],
        "answer": "inside, sitting on the floor."
      },
      {
        "level": "behavioral",
        "q": "What is person red doing between seconds 5.0 and 6.0?",
        "options": [
          "Person red picks up a red toy car from the shelf.",
          "Person red stands up and walks toward the bookshelf.",
          "Person red places the horse toy back on the floor.",
          "Person red gives person green the horse toy."
        ],
        "answer": "Person red gives person green the horse toy."
      },
      {
        "level": "interpersonal",
        "q": "After second 5.0, how does person green respond to person red giving person green the horse toy?",
        "options": [
          "Person green responds by tapping person red's knee.",
          "Person green responds by reaching her hand out to person red.",
          "Person green responds by moving the horse.",
          "Person green responds by watches the horse."
        ],
        "answer": "Person green responds by moving the horse."
      },
      {
        "level": "open",
        "q": "Describe the main interactions in this scene involving person red, person green.",
        "a": "Person green taps person red's knee, and person red smiles. Person green talks to person red, and person red reaches for a toy horse. Person red gives person green the horse. Person green makes the horse gallop across the air in front of person red. Person green reaches her hand out to person red, and person red takes person green's hand."
      }
    ]
  },
  {
    "id": "childplay0017_seg05",
    "video": "./videos/childplay0017_seg05.mp4",
    "poster": "./figures/posters/childplay0017_seg05.jpg",
    "caption": "Pointing at pictures in a folder.",
    "participants": [
      {
        "label": "person green",
        "color": "#22c55e",
        "desc": "a toddler in a blue and white striped sweater with red pants"
      },
      {
        "label": "person red",
        "color": "#ef4444",
        "desc": "an adult with dark hair wearing a black jacket and gray scarf"
      }
    ],
    "questions": [
      {
        "level": "contextual",
        "q": "Where is the scene taking place?",
        "options": [
          "inside.",
          "in a garden, near a flower bed.",
          "on a wooden porch, surrounded by plants.",
          "outside in a park, sitting on a bench."
        ],
        "answer": "inside."
      },
      {
        "level": "behavioral",
        "q": "What is person red doing between seconds 0.0 and 2.0?",
        "options": [
          "Person red reaches for a book on the shelf to her right.",
          "Person red points at a picture.",
          "Person red turns the page of the book with her left hand.",
          "Person red adjusts her jacket zipper with her right hand."
        ],
        "answer": "Person red points at a picture."
      },
      {
        "level": "interpersonal",
        "q": "After second 0.0, how does person green respond to person red pointing at a picture?",
        "options": [
          "Person green responds by touching the book with their hand but not pointing.",
          "Person green responds by looking at the picture and then turning their head away.",
          "Person green responds by holding the folder.",
          "Person green responds by pointing at the picture."
        ],
        "answer": "Person green responds by pointing at the picture."
      },
      {
        "level": "open",
        "q": "Describe the main interactions in this scene involving person red, person green.",
        "a": "Person red points at a picture and shows it to person green. Person green looks at the picture person red showed him and points at the picture as well. Person red points at another picture, and person green points at the picture and talks to person red."
      }
    ]
  },
  {
    "id": "childplay0026_seg04",
    "video": "./videos/childplay0026_seg04.mp4",
    "poster": "./figures/posters/childplay0026_seg04.jpg",
    "caption": "Playing with a red animal figure.",
    "participants": [
      {
        "label": "person blue",
        "color": "#3b82f6",
        "desc": "an adult with long black hair wearing a blue shirt and gray pants"
      },
      {
        "label": "person green",
        "color": "#22c55e",
        "desc": "an adult with blonde hair in a ponytail wearing a white collared shirt"
      },
      {
        "label": "person red",
        "color": "#ef4444",
        "desc": "a toddler in a gray shirt with a graphic and plaid shorts"
      }
    ],
    "questions": [
      {
        "level": "contextual",
        "q": "Where is the scene taking place?",
        "options": [
          "inside, sitting on a couch.",
          "inside, playing on a rug.",
          "inside, sitting at a table.",
          "inside, sitting on floor mats."
        ],
        "answer": "inside, sitting at a table."
      },
      {
        "level": "behavioral",
        "q": "What is person green doing between seconds 1.0 and 2.0?",
        "options": [
          "Person green looks at person blue with a smile.",
          "Person green passes the figure animal to person red.",
          "Person green leans forward to speak to person red.",
          "Person green reaches out to touch the table."
        ],
        "answer": "Person green passes the figure animal to person red."
      },
      {
        "level": "interpersonal",
        "q": "After second 1.0, how does person red respond to person green passing the figure animal to person red?",
        "options": [
          "Person red responds by clapping.",
          "Person red responds by looking away from the toy and turning their head toward person blue.",
          "Person red responds by leaning back slightly in the chair while keeping their hands on the table.",
          "Person red responds by pushing the toy back to person green."
        ],
        "answer": "Person red responds by pushing the toy back to person green."
      },
      {
        "level": "open",
        "q": "Describe the main interactions in this scene involving person red, person green, person blue.",
        "a": "Person green smiles at person red, who looks upset, as person blue claps. Person green gives the red toy to person red. Person red pushes the toy back to person green, who reaches out to touch the toy. Person green pushes off the table to sit back up. Person blue watches as person green and person red interact."
      }
    ]
  },
  {
    "id": "childplay0032_seg03",
    "video": "./videos/childplay0032_seg03.mp4",
    "poster": "./figures/posters/childplay0032_seg03.jpg",
    "caption": "Playing a group game.",
    "participants": [
      {
        "label": "person blue",
        "color": "#3b82f6",
        "desc": "a preschooler girl with a hair clip wearing a white long-sleeve shirt and gray striped pants"
      },
      {
        "label": "person green",
        "color": "#22c55e",
        "desc": "a preschooler in a white dress with purple leggings"
      },
      {
        "label": "person red",
        "color": "#ef4444",
        "desc": "an adult woman with long dark hair wearing a white top and black pants"
      }
    ],
    "questions": [
      {
        "level": "contextual",
        "q": "Where is the scene taking place?",
        "options": [
          "in a community center, standing.",
          "in a classroom, standing.",
          "in a library, standing.",
          "in a gymnasium, standing."
        ],
        "answer": "in a classroom, standing."
      },
      {
        "level": "behavioral",
        "q": "What is person green doing between seconds 3.0 and 4.0?",
        "options": [
          "Person green looks down at the floor and crosses her arms.",
          "Person green says something.",
          "Person green claps her hands together.",
          "Person green jumps up and down excitedly."
        ],
        "answer": "Person green says something."
      },
      {
        "level": "interpersonal",
        "q": "After second 3.0, how does person red respond to person green saying something?",
        "options": [
          "Person red responds by leaning forward toward person green.",
          "Person red responds by pointing at person green with their right hand.",
          "Person red responds by giving person green the red chip.",
          "Person red responds by clapping their hands."
        ],
        "answer": "Person red responds by giving person green the red chip."
      },
      {
        "level": "open",
        "q": "Describe the main interactions in this scene involving person red, person green, person blue.",
        "a": "While playing a group game, person red points at person green. Person blue smiles and leans in closer. Person green says something and receives a red chip from person red while person blue claps their hands. Person green looks at the chip with excitement."
      }
    ]
  }
];
