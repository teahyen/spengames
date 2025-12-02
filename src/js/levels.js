// Level data - 60 Balanced Levels
// Generated with A* pathfinding validation
// All levels guarantee optimal path from start to goal
// Progressive difficulty: 3x3 → 7x7

const LEVELS = [
  {
    "id": 1,
    "size": 3,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 2,
      "y": 2
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W"
        ]
      }
    ]
  },
  {
    "id": 2,
    "size": 3,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 2,
      "y": 2
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      }
    ]
  },
  {
    "id": 3,
    "size": 3,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 2,
      "y": 2
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "N"
        ]
      }
    ]
  },
  {
    "id": 4,
    "size": 3,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 2,
      "y": 2
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      }
    ]
  },
  {
    "id": 5,
    "size": 3,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 2,
      "y": 2
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "N"
        ]
      }
    ]
  },
  {
    "id": 6,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 2
      }
    ]
  },
  {
    "id": 7,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3
      }
    ]
  },
  {
    "id": 8,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2
      }
    ]
  },
  {
    "id": 9,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 0
      }
    ]
  },
  {
    "id": 10,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 0
      }
    ]
  },
  {
    "id": 11,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2
      }
    ]
  },
  {
    "id": 12,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 1,
        "side": "N"
      }
    ]
  },
  {
    "id": 13,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 1,
        "side": "N"
      }
    ]
  },
  {
    "id": 14,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 2,
        "side": "W"
      }
    ]
  },
  {
    "id": 15,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 0
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 2,
        "side": "E"
      }
    ]
  },
  {
    "id": 16,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3
      }
    ],
    "movingBoxes": [
      {
        "x": 1,
        "y": 2
      }
    ]
  },
  {
    "id": 17,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 0
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 0
      }
    ]
  },
  {
    "id": 18,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2
      }
    ],
    "movingBoxes": [
      {
        "x": 1,
        "y": 1
      }
    ]
  },
  {
    "id": 19,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2
      }
    ],
    "movingBoxes": [
      {
        "x": 1,
        "y": 3
      }
    ]
  },
  {
    "id": 20,
    "size": 4,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 3,
      "y": 3
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 1
      }
    ],
    "movingBoxes": [
      {
        "x": 2,
        "y": 0
      }
    ]
  },
  {
    "id": 21,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 3
      },
      {
        "x": 2,
        "y": 0
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 4
      }
    ]
  },
  {
    "id": 22,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 2,
        "y": 2
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 2
      }
    ]
  },
  {
    "id": 23,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 0
      }
    ],
    "movingBoxes": [
      {
        "x": 0,
        "y": 2
      }
    ]
  },
  {
    "id": 24,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 4
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "movingBoxes": [
      {
        "x": 0,
        "y": 1
      }
    ]
  },
  {
    "id": 25,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 2,
        "y": 4
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 1
      }
    ]
  },
  {
    "id": 26,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 1,
        "y": 3
      }
    ],
    "movingBoxes": [
      {
        "x": 2,
        "y": 0
      }
    ]
  },
  {
    "id": 27,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2
      },
      {
        "x": 1,
        "y": 1
      }
    ],
    "movingBoxes": [
      {
        "x": 0,
        "y": 3
      }
    ]
  },
  {
    "id": 28,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 2,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 3,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 2,
        "y": 0
      }
    ]
  },
  {
    "id": 29,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 2
      },
      {
        "x": 2,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 2,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 0,
        "y": 4
      }
    ]
  },
  {
    "id": 30,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 2,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 2,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 2
      }
    ]
  },
  {
    "id": 31,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 3
      },
      {
        "x": 1,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 3,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 0,
        "y": 1
      }
    ]
  },
  {
    "id": 32,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 3,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 2,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 3
      }
    ]
  },
  {
    "id": 33,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 1,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 3,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 2
      }
    ]
  },
  {
    "id": 34,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 1,
        "y": 4
      },
      {
        "x": 1,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 3,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 0
      }
    ],
    "powerups": [
      {
        "x": 2,
        "y": 1,
        "type": "teleport"
      },
      {
        "x": 3,
        "y": 2,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 35,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 2,
        "y": 1
      },
      {
        "x": 3,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 3,
        "side": "W"
      }
    ],
    "movingBoxes": [
      {
        "x": 1,
        "y": 1
      }
    ],
    "powerups": [
      {
        "x": 2,
        "y": 1,
        "type": "remove_obstacle"
      },
      {
        "x": 4,
        "y": 1,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 36,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 3
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 2,
        "y": 3
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 3
      }
    ],
    "powerups": [
      {
        "x": 2,
        "y": 2,
        "type": "teleport"
      },
      {
        "x": 0,
        "y": 1,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 37,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 1,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 2,
        "y": 1
      }
    ],
    "powerups": [
      {
        "x": 2,
        "y": 3,
        "type": "teleport"
      },
      {
        "x": 1,
        "y": 0,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 38,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2
      },
      {
        "x": 1,
        "y": 3
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 2,
        "side": "N"
      },
      {
        "x": 2,
        "y": 2,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 0,
        "y": 4
      }
    ],
    "powerups": [
      {
        "x": 4,
        "y": 0,
        "type": "remove_obstacle"
      },
      {
        "x": 3,
        "y": 0,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 39,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 0,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 2,
        "side": "W"
      },
      {
        "x": 2,
        "y": 3,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 3
      }
    ],
    "powerups": [
      {
        "x": 3,
        "y": 1,
        "type": "teleport"
      },
      {
        "x": 2,
        "y": 2,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 40,
    "size": 5,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 4,
      "y": 4
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 2,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 2,
        "side": "S"
      },
      {
        "x": 2,
        "y": 2,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 1,
        "y": 3
      }
    ],
    "powerups": [
      {
        "x": 2,
        "y": 4,
        "type": "teleport"
      },
      {
        "x": 4,
        "y": 1,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 41,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 1
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 5
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 1,
        "side": "S"
      },
      {
        "x": 2,
        "y": 3,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 1,
        "y": 0
      }
    ]
  },
  {
    "id": 42,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 2
      },
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 4,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 4,
        "side": "S"
      },
      {
        "x": 3,
        "y": 3,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 5,
        "y": 1
      }
    ]
  },
  {
    "id": 43,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "E",
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 2
      },
      {
        "x": 5,
        "y": 2
      },
      {
        "x": 0,
        "y": 4
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 3,
        "y": 1
      }
    ]
  },
  {
    "id": 44,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 5,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 1,
        "side": "N"
      },
      {
        "x": 3,
        "y": 4,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 2,
        "y": 5
      }
    ]
  },
  {
    "id": 45,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0
      },
      {
        "x": 2,
        "y": 0
      },
      {
        "x": 4,
        "y": 5
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 3,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 2,
        "y": 5
      }
    ]
  },
  {
    "id": 46,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 3,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 2,
        "side": "E"
      },
      {
        "x": 1,
        "y": 2,
        "side": "W"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 3,
        "y": 1
      }
    ]
  },
  {
    "id": 47,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 4
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 3,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 4,
        "y": 4,
        "side": "E"
      },
      {
        "x": 1,
        "y": 1,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 0
      },
      {
        "x": 1,
        "y": 4
      }
    ]
  },
  {
    "id": 48,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 0,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 1,
        "side": "N"
      },
      {
        "x": 3,
        "y": 3,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 1,
        "y": 4
      }
    ],
    "powerups": [
      {
        "x": 4,
        "y": 2,
        "type": "teleport"
      },
      {
        "x": 1,
        "y": 2,
        "type": "teleport"
      }
    ]
  },
  {
    "id": 49,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "E"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 0,
        "y": 4
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 4,
        "side": "N"
      },
      {
        "x": 3,
        "y": 3,
        "side": "S"
      },
      {
        "x": 4,
        "y": 1,
        "side": "S"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 3,
        "y": 1
      }
    ],
    "powerups": [
      {
        "x": 1,
        "y": 4,
        "type": "remove_obstacle"
      },
      {
        "x": 1,
        "y": 3,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 50,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "E"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 1,
        "y": 4
      },
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 4,
        "y": 4
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 2,
        "side": "N"
      },
      {
        "x": 3,
        "y": 3,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 5,
        "y": 2
      }
    ],
    "powerups": [
      {
        "x": 5,
        "y": 1,
        "type": "remove_obstacle"
      },
      {
        "x": 0,
        "y": 3,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 51,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "S",
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "N",
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 1,
        "y": 2
      },
      {
        "x": 0,
        "y": 4
      }
    ],
    "movingBoxes": [
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 1,
        "y": 3
      },
      {
        "x": 5,
        "y": 1
      }
    ],
    "powerups": [
      {
        "x": 1,
        "y": 3,
        "type": "remove_obstacle"
      },
      {
        "x": 4,
        "y": 3,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 52,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 5,
        "y": 4
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 0
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 2,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 1,
        "y": 1
      }
    ],
    "powerups": [
      {
        "x": 4,
        "y": 2,
        "type": "teleport"
      },
      {
        "x": 1,
        "y": 5,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 53,
    "size": 6,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 5,
      "y": 5
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 3
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 2,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 4,
        "side": "W"
      },
      {
        "x": 2,
        "y": 2,
        "side": "N"
      },
      {
        "x": 2,
        "y": 4,
        "side": "W"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 2,
        "y": 1
      }
    ],
    "powerups": [
      {
        "x": 0,
        "y": 5,
        "type": "remove_obstacle"
      },
      {
        "x": 0,
        "y": 2,
        "type": "teleport"
      }
    ]
  },
  {
    "id": 54,
    "size": 7,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 6,
      "y": 6
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "E"
        ]
      },
      {
        "x": 6,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 3,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 4,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "N",
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "S",
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 5,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 6,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 6,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 6,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 6,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 6,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 6,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 6,
        "paths": [
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 6,
        "y": 4
      },
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 2,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 4,
        "y": 4,
        "side": "E"
      },
      {
        "x": 3,
        "y": 2,
        "side": "W"
      }
    ],
    "movingBoxes": [
      {
        "x": 6,
        "y": 0
      },
      {
        "x": 0,
        "y": 6
      },
      {
        "x": 5,
        "y": 6
      },
      {
        "x": 0,
        "y": 1
      }
    ],
    "powerups": [
      {
        "x": 1,
        "y": 0,
        "type": "remove_obstacle"
      },
      {
        "x": 6,
        "y": 1,
        "type": "teleport"
      }
    ]
  },
  {
    "id": 55,
    "size": 7,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 6,
      "y": 6
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 0,
        "paths": [
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "E",
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 2,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 3,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "E",
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 4,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 5,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 6,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 6,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 6,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 6,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 6,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 6,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 6,
        "paths": [
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 0,
        "y": 1
      },
      {
        "x": 5,
        "y": 4
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 0,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 2,
        "side": "S"
      },
      {
        "x": 3,
        "y": 2,
        "side": "E"
      },
      {
        "x": 1,
        "y": 3,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 5,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 0,
        "y": 6
      }
    ],
    "powerups": [
      {
        "x": 5,
        "y": 6,
        "type": "teleport"
      },
      {
        "x": 0,
        "y": 3,
        "type": "teleport"
      }
    ]
  },
  {
    "id": 56,
    "size": 7,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 6,
      "y": 6
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "W"
        ]
      },
      {
        "x": 6,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 2,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 3,
        "paths": [
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 4,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "E",
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "N",
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 5,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 6,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 6,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 6,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 6,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 6,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 6,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 6,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 3,
        "y": 6
      }
    ],
    "deathWalls": [
      {
        "x": 5,
        "y": 4,
        "side": "S"
      },
      {
        "x": 4,
        "y": 2,
        "side": "E"
      },
      {
        "x": 2,
        "y": 3,
        "side": "S"
      },
      {
        "x": 5,
        "y": 5,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 1,
        "y": 0
      },
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 6,
        "y": 1
      },
      {
        "x": 3,
        "y": 0
      }
    ],
    "powerups": [
      {
        "x": 2,
        "y": 1,
        "type": "teleport"
      },
      {
        "x": 0,
        "y": 2,
        "type": "teleport"
      }
    ]
  },
  {
    "id": 57,
    "size": 7,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 6,
      "y": 6
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "N",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 2,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "N",
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 3,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 5,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 6,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 6,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 6,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 6,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 6,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 6,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 6,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 1
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 1,
        "y": 6
      }
    ],
    "deathWalls": [
      {
        "x": 4,
        "y": 5,
        "side": "S"
      },
      {
        "x": 5,
        "y": 2,
        "side": "W"
      },
      {
        "x": 4,
        "y": 2,
        "side": "N"
      }
    ],
    "movingBoxes": [
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 5,
        "y": 4
      },
      {
        "x": 0,
        "y": 3
      }
    ],
    "powerups": [
      {
        "x": 0,
        "y": 1,
        "type": "teleport"
      },
      {
        "x": 3,
        "y": 0,
        "type": "teleport"
      }
    ]
  },
  {
    "id": 58,
    "size": 7,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 6,
      "y": 6
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 1,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "W",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 3,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "S",
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "N",
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 4,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "W"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 5,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 6,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 6,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 6,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 6,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 6,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 5,
        "y": 6,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 6,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 3
      },
      {
        "x": 1,
        "y": 6
      },
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 5,
        "y": 4
      },
      {
        "x": 5,
        "y": 1
      }
    ],
    "deathWalls": [
      {
        "x": 3,
        "y": 5,
        "side": "W"
      },
      {
        "x": 2,
        "y": 2,
        "side": "N"
      },
      {
        "x": 1,
        "y": 1,
        "side": "W"
      },
      {
        "x": 5,
        "y": 5,
        "side": "W"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 6
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 5,
        "y": 4
      },
      {
        "x": 6,
        "y": 2
      }
    ],
    "powerups": [
      {
        "x": 3,
        "y": 6,
        "type": "remove_obstacle"
      },
      {
        "x": 3,
        "y": 0,
        "type": "teleport"
      }
    ]
  },
  {
    "id": 59,
    "size": 7,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 6,
      "y": 6
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 6,
        "y": 0,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 1,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 2,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "S",
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "W",
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "N",
          "E",
          "W",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 4,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "E"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 5,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 6,
        "paths": [
          "N"
        ]
      },
      {
        "x": 1,
        "y": 6,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 6,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 6,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 6,
        "paths": [
          "E",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 6,
        "paths": [
          "E",
          "W",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 6,
        "paths": [
          "N",
          "W"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 3
      },
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 0,
        "y": 5
      },
      {
        "x": 1,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      }
    ],
    "deathWalls": [
      {
        "x": 1,
        "y": 2,
        "side": "S"
      },
      {
        "x": 2,
        "y": 3,
        "side": "E"
      }
    ],
    "movingBoxes": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 5,
        "y": 6
      }
    ],
    "powerups": [
      {
        "x": 4,
        "y": 4,
        "type": "teleport"
      },
      {
        "x": 3,
        "y": 1,
        "type": "remove_obstacle"
      }
    ]
  },
  {
    "id": 60,
    "size": 7,
    "start": {
      "x": 0,
      "y": 0
    },
    "goal": {
      "x": 6,
      "y": 6
    },
    "tiles": [
      {
        "x": 0,
        "y": 0,
        "paths": [
          "E"
        ]
      },
      {
        "x": 1,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 0,
        "paths": [
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 0,
        "paths": [
          "W",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 0,
        "paths": [
          "W",
          "E",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 0,
        "paths": [
          "W",
          "S"
        ]
      },
      {
        "x": 0,
        "y": 1,
        "paths": [
          "E",
          "S"
        ]
      },
      {
        "x": 1,
        "y": 1,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 1,
        "paths": [
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 1,
        "paths": [
          "S",
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 1,
        "paths": [
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 1,
        "paths": [
          "S",
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 1,
        "paths": [
          "N",
          "S",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 2,
        "paths": [
          "S",
          "E",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 2,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 2,
        "y": 2,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 2,
        "paths": [
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 2,
        "paths": [
          "N",
          "W",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 2,
        "paths": [
          "E",
          "N",
          "S"
        ]
      },
      {
        "x": 6,
        "y": 2,
        "paths": [
          "S",
          "W",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 3,
        "paths": [
          "N",
          "S"
        ]
      },
      {
        "x": 2,
        "y": 3,
        "paths": [
          "N",
          "E",
          "S"
        ]
      },
      {
        "x": 3,
        "y": 3,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 3,
        "paths": [
          "N",
          "E",
          "S",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 3,
        "paths": [
          "W",
          "S",
          "N"
        ]
      },
      {
        "x": 6,
        "y": 3,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 4,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 2,
        "y": 4,
        "paths": [
          "W",
          "N",
          "S",
          "E"
        ]
      },
      {
        "x": 3,
        "y": 4,
        "paths": [
          "N",
          "S",
          "E",
          "W"
        ]
      },
      {
        "x": 4,
        "y": 4,
        "paths": [
          "E",
          "W",
          "N",
          "S"
        ]
      },
      {
        "x": 5,
        "y": 4,
        "paths": [
          "N",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 4,
        "paths": [
          "S",
          "N"
        ]
      },
      {
        "x": 0,
        "y": 5,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 1,
        "y": 5,
        "paths": [
          "S",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 5,
        "paths": [
          "E",
          "S",
          "N"
        ]
      },
      {
        "x": 3,
        "y": 5,
        "paths": [
          "N",
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 4,
        "y": 5,
        "paths": [
          "S",
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 5,
        "y": 5,
        "paths": [
          "W",
          "S",
          "E"
        ]
      },
      {
        "x": 6,
        "y": 5,
        "paths": [
          "S",
          "N",
          "W"
        ]
      },
      {
        "x": 0,
        "y": 6,
        "paths": [
          "N",
          "E"
        ]
      },
      {
        "x": 1,
        "y": 6,
        "paths": [
          "E",
          "N",
          "W"
        ]
      },
      {
        "x": 2,
        "y": 6,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 3,
        "y": 6,
        "paths": [
          "W",
          "E",
          "N"
        ]
      },
      {
        "x": 4,
        "y": 6,
        "paths": [
          "W",
          "N",
          "E"
        ]
      },
      {
        "x": 5,
        "y": 6,
        "paths": [
          "N",
          "E",
          "W"
        ]
      },
      {
        "x": 6,
        "y": 6,
        "paths": [
          "W",
          "N"
        ]
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 5,
        "y": 5
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 6,
        "y": 2
      }
    ],
    "deathWalls": [
      {
        "x": 2,
        "y": 5,
        "side": "W"
      },
      {
        "x": 5,
        "y": 2,
        "side": "W"
      },
      {
        "x": 2,
        "y": 3,
        "side": "W"
      }
    ],
    "movingBoxes": [
      {
        "x": 0,
        "y": 6
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 4,
        "y": 2
      }
    ],
    "powerups": [
      {
        "x": 2,
        "y": 5,
        "type": "teleport"
      },
      {
        "x": 4,
        "y": 4,
        "type": "remove_obstacle"
      }
    ]
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVELS };
}
