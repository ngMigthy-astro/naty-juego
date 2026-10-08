// src/data/characters.ts
export interface Character {
  id: string;
  name: string;
  movie: string;
  studio: "Disney" | "Pixar";
  imageUrl: string;
}

export const CHARACTERS: Character[] = [
  // --- PIXAR (17) ---
  {
    id: "woody",
    name: "Woody",
    movie: "Toy Story",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/pixar/images/e/ef/Woody_profile.jpg",
  },
  {
    id: "buzz",
    name: "Buzz Lightyear",
    movie: "Toy Story",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg",
  },
  {
    id: "jessie",
    name: "Jessie",
    movie: "Toy Story",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/1/11/Profile_-_Jessie.jpeg",
  },
  {
    id: "rex",
    name: "Rex",
    movie: "Toy Story",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/5/56/Profile_-_Rex.jpeg",
  },
  {
    id: "miguel",
    name: "Miguel",
    movie: "Coco",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/0/00/Profile_-_Miguel_Rivera.jpg",
  },
  {
    id: "sulley",
    name: "Sulley",
    movie: "Monsters, Inc.",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/3/3c/Profile_-_Sulley.jpg",
  },
  {
    id: "mike",
    name: "Mike Wazowski",
    movie: "Monsters, Inc.",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/d5/Profile_-_Mike_Wazowski.jpg",
  },
  {
    id: "joy",
    name: "Alegría",
    movie: "Intensa-Mente",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/e/eb/Profile_-_Joy.png",
  },
  {
    id: "sadness",
    name: "Tristeza",
    movie: "Intensa-Mente",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/a/ad/Profile_-_Sadness.png",
  },
  {
    id: "anger",
    name: "Furia",
    movie: "Intensa-Mente",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/5/5a/Profile_-_Anger.png",
  },
  {
    id: "mcqueen",
    name: "Rayo McQueen",
    movie: "Cars",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/1/10/Profile_-_Lightning_McQueen.png",
  },
  {
    id: "mater",
    name: "Mate",
    movie: "Cars",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/6/63/Profile-_Mater.png",
  },
  {
    id: "merida",
    name: "Mérida",
    movie: "Valiente",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/d2/Profile_-_Merida.jpeg",
  },
  {
    id: "remy",
    name: "Remy",
    movie: "Ratatouille",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/0/0d/Profile_-_Remy.jpg",
  },
  {
    id: "walle",
    name: "WALL-E",
    movie: "WALL-E",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/9/9c/Profile_-_WALL-E.png",
  },
  {
    id: "carl",
    name: "Carl Fredricksen",
    movie: "Up",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/2/28/Profile-_Carl_Fredricksen.png",
  },
  {
    id: "dory",
    name: "Dory",
    movie: "Buscando a Nemo",
    studio: "Pixar",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/3/36/Profile_-_Dory.png",
  },

  // --- DISNEY (17) ---
  {
    id: "elsa",
    name: "Elsa",
    movie: "Frozen",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/9/95/Profile_-_Elsa.jpeg",
  },
  {
    id: "anna",
    name: "Anna",
    movie: "Frozen",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/0/0f/Profile_-_Anna.jpeg",
  },
  {
    id: "olaf",
    name: "Olaf",
    movie: "Frozen",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/5/53/Profile_-_Olaf.jpeg",
  },
  {
    id: "moana",
    name: "Moana",
    movie: "Moana",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/7/7d/Profile_-_Moana.png",
  },
  {
    id: "rapunzel",
    name: "Rapunzel",
    movie: "Enredados",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/a/ae/Profile_-_Rapunzel.jpeg",
  },
  {
    id: "mirabel",
    name: "Mirabel",
    movie: "Encanto",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/2/2e/Profile_-_Mirabel_Madrigal.png",
  },
  {
    id: "bruno",
    name: "Bruno",
    movie: "Encanto",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/3/33/Profile_-_Bruno_Madrigal.png",
  },
  {
    id: "luisa",
    name: "Luisa",
    movie: "Encanto",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/df/Profile_-_Luisa_Madrigal.jpg",
  },
  {
    id: "stitch",
    name: "Stitch",
    movie: "Lilo & Stitch",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/b/b7/Profile_-_Stitch.jpg",
  },
  {
    id: "simba",
    name: "Simba",
    movie: "El Rey León",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/3/37/Profile_-_Simba.jpeg",
  },
  {
    id: "baymax",
    name: "Baymax",
    movie: "Grandes Héroes",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/d4/Profile_-_Baymax.jpeg",
  },
  {
    id: "mulan",
    name: "Mulán",
    movie: "Mulán",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/0/04/Profile_-_Mulan.jpeg",
  },
  {
    id: "aladdin",
    name: "Aladdín",
    movie: "Aladdín",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/b/bb/Profile_-_Aladdin.png",
  },
  {
    id: "genie",
    name: "El Genio",
    movie: "Aladdín",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/9/92/Profile_-_Genie.jpeg",
  },
  {
    id: "ariel",
    name: "Ariel",
    movie: "La Sirenita",
    studio: "Disney",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
  },
  {
    id: "belle",
    name: "Bella",
    movie: "La Bella y la Bestia",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Belle.jpeg",
  },
  {
    id: "judy",
    name: "Judy Hopps",
    movie: "Zootopia",
    studio: "Disney",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/da/Profile_-_Judy_Hopps.jpeg",
  },
];
