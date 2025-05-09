export const FIRE = [
  {
    id: 1,
    image: "/image/fire 1.png",
    word: "C",
  },
  {
    id: 2,
    image: "/image/fire 2.png",
    word: "H",
  },
  {
    id: 3,
    image: "/image/fire 3.png",
    word: "O",
  },
  {
    id: 4,
    image: "/image/fire 4.png",
    word: "R",
  },
  {
    id: 5,
    image: "/image/fire 5.png",
    word: "D",
  },
];

export const WATER = [
  {
    id: 1,
    image: "/image/water 1.png",
    word: "O",
  },
  {
    id: 2,
    image: "/image/water 2.png",
    word: "C",
  },
  {
    id: 3,
    image: "/image/water 3.png",
    word: "H",
  },
  {
    id: 4,
    image: "/image/water 4.png",
    word: "R",
  },
  {
    id: 5,
    image: "/image/water 5.png",
    word: "D",
  },
];

export const EARTH = [
  {
    id: 1,
    image: "/image/earth 1.png",
    word: "C",
  },
  {
    id: 2,
    image: "/image/earth 2.png",
    word: "R",
  },
  {
    id: 3,
    image: "/image/earth 3.png",
    word: "D",
  },
  {
    id: 4,
    image: "/image/earth 4.png",
    word: "O",
  },
  {
    id: 5,
    image: "/image/earth 5.png",
    word: "H",
  },
];

export const THUNDER = [
  {
    id: 1,
    image: "/image/thunder 1.png",
    word: "D",
  },
  {
    id: 2,
    image: "/image/thunder 2.png",
    word: "O",
  },
  {
    id: 3,
    image: "/image/thunder 3.png",
    word: "H",
  },
  {
    id: 4,
    image: "/image/thunder 4.png",
    word: "R",
  },
  {
    id: 5,
    image: "/image/thunder 5.png",
    word: "C",
  },
];

export const getPokemonByType = (type: string, id: number) => {
  switch (type) {
    case "fire":
      return FIRE[id - 1];
    case "water":
      return WATER[id - 1];
    case "earth":
      return EARTH[id - 1];
    case "thunder":
      return THUNDER[id - 1];
    default:
      return {
        id: 0,
        image: "",
        word: "",
      };
  }
};

export const getPokemonResult = (type: string) => {
  switch (type) {
    case "fire":
      return FIRE;
    case "water":
      return WATER;
    case "earth":
      return EARTH;
    case "thunder":
      return THUNDER;
    default:
      return [];
  }
};
