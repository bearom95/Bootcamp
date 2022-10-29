const animals = [
  {
    name: "Eastern Screech Owl",
    latin_name: "Megascops asio",
    animal_type: "Bird",
    active_time: "Nocturnal",
    length_min: "0.7",
    length_max: "0.8",
    weight_min: "0.4",
    weight_max: "0.53",
    lifespan: "10",
    habitat: "Woodlands",
    diet: "Small mammals, insects, frogs, worms and lizards",
    geo_range: "Eastern United States",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/EasternScreechOwl-Rufous.jpg",
    id: 66,
  },
  {
    name: "Guam Rail",
    latin_name: "Hypotaenidia owstoni",
    animal_type: "Bird",
    active_time: "Diurnal",
    length_min: "0.83",
    length_max: "0.92",
    weight_min: "0.5",
    weight_max: "0.66",
    lifespan: "10",
    habitat: "Forest and grassland",
    diet: "Small animals, carrion, seeds, and leaves",
    geo_range: "Guam",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/GuamRail02.jpg",
    id: 84,
  },
  {
    name: "Parma Wallaby",
    latin_name: "Macropus parma",
    animal_type: "Marsupial",
    active_time: "Diurnal",
    length_min: "1.5",
    length_max: "2",
    weight_min: "10",
    weight_max: "11",
    lifespan: "7",
    habitat: "Forest and grassland",
    diet: "Grass",
    geo_range: "Australia and New Zealand",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Parma_wallaby_crop2.jpg",
    id: 133,
  },
  {
    name: "North American River Otter",
    latin_name: "Lutra canadensis",
    animal_type: "Mammal",
    active_time: "Nocturnal",
    length_min: "3.2",
    length_max: "3.9",
    weight_min: "11",
    weight_max: "33",
    lifespan: "11",
    habitat:
      "Freshwater rivers, streams, lakes, ponds, marshes, swamps, and coastal waters",
    diet: "Fish, crayfish, ducklings, turtles, and other small animals",
    geo_range: "Canada and the United States",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/North_American_River_Otter_-_CNP_3361_%287056954311%29.jpg",
    id: 125,
  },
  {
    name: "Green Tree Monitor",
    latin_name: "Varanus prasinus",
    animal_type: "Reptile",
    active_time: "Diurnal",
    length_min: "2.5",
    length_max: "3.3",
    weight_min: "0.6",
    weight_max: "0.7",
    lifespan: "20",
    habitat: "Forest and swamp",
    diet: "Small animals, such as insects and crabs, and eggs",
    geo_range: "New Guinea and northern Australia",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Varanus_prasinus.jpg",
    id: 81,
  },
  {
    name: "Bennett's Wallaby",
    latin_name: "Macropus rufogriseus",
    animal_type: "Marsupial",
    active_time: "Diurnal",
    length_min: "4.5",
    length_max: "5.5",
    weight_min: "25",
    weight_max: "50",
    lifespan: "15",
    habitat: "Forest",
    diet: "Grass and herbs",
    geo_range: "Southeastern Australia, including Tasmania",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Macropus_rufogriseus_rufogriseus_Bruny.jpg",
    id: 30,
  },
  {
    name: "Matamata",
    latin_name: "Chelus fimbriatus",
    animal_type: "Reptile",
    active_time: "Nocturnal",
    length_min: "1.1",
    length_max: "1.3",
    weight_min: "35",
    weight_max: "38",
    lifespan: "30",
    habitat: "Shallow pools and streams",
    diet: "Fish",
    geo_range: "Northern South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/2009_Chelus_fimbriatus.JPG",
    id: 116,
  },
  {
    name: "White-Faced Saki",
    latin_name: "Pithecia pithecia",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "1",
    length_max: "1.2",
    weight_min: "4",
    weight_max: "4.5",
    lifespan: "11",
    habitat: "Tropical rainforest",
    diet: "Fruit, seeds, honey, leaves, flowers, small mammals and birds",
    geo_range: "Northern South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/White-faced_Saki_2008-07.jpg",
    id: 189,
  },
  {
    name: "Yellow-rumped Cacique",
    latin_name: "Cacicus cela",
    animal_type: "Bird",
    active_time: "Diurnal",
    length_min: "0.75",
    length_max: "0.96",
    weight_min: "0.13",
    weight_max: "0.23",
    lifespan: "16",
    habitat: "Forest edges, woodlands, agricultural areas and towns",
    diet: "Invertebrates, berries, fruits and leaves",
    geo_range: "Northern South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Yellow-rumped_Cacique_-_Pantanal_-_Brazil_H8O2199_%2823593614830%29.jpg",
    id: 197,
  },
  {
    name: "Laughing Kookaburra",
    latin_name: "Dacelo navaeguineae",
    animal_type: "Bird",
    active_time: "Diurnal",
    length_min: "1.4",
    length_max: "1.5",
    weight_min: "0.8",
    weight_max: "1",
    lifespan: "20",
    habitat: "Forest",
    diet: "Insects, snakes, lizards, rodents, and small birds",
    geo_range: "Australia, Tasmania and New Zealand",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Laughing_kookaburra_dec08_02.jpg",
    id: 104,
  },
  {
    name: "Red River Hog",
    latin_name: "Potamochoerus porcus",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "3.5",
    length_max: "5",
    weight_min: "100",
    weight_max: "290",
    lifespan: "15",
    habitat: "Rainforest, forest and savanna woodland",
    diet: "Primarily roots and bulbs, some other plant parts and small animals",
    geo_range: "Western and central Africa",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Pinselohrschwein_Potamochoerus_porcus_Tierpark_Hellabrunn-5.jpg",
    id: 146,
  },
  {
    name: "Andean Bear",
    latin_name: "Tremarctos ornatus",
    animal_type: "Mammal",
    active_time: "Nocturnal",
    length_min: "4.3",
    length_max: "6.6",
    weight_min: "220",
    weight_max: "440",
    lifespan: "26",
    habitat: "Mountain forests, grasslands, and scrub dessert",
    diet: "Primarily fruits, bromeliads, bamboo, cactus and other plants, some small animals",
    geo_range: "Northwestern South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tremarctos_ornatus_25.jpg",
    id: 13,
  },
  {
    name: "Serval",
    latin_name: "Leptailurus serval",
    animal_type: "Mammal",
    active_time: "Nocturnal",
    length_min: "2.3",
    length_max: "3.3",
    weight_min: "7.5",
    weight_max: "41",
    lifespan: "13",
    habitat: "Savannah",
    diet: "Game birds, rodents, small ungulates",
    geo_range: "Africa",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Leptailurus_serval_-Serengeti_National_Park%2C_Tanzania-8.jpg",
    id: 161,
  },
  {
    name: "Asian Elephant",
    latin_name: "Elephas maximus",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "9",
    length_max: "10",
    weight_min: "10000",
    weight_max: "11000",
    lifespan: "47",
    habitat: "Forest",
    diet: "Grasses, leaves, barks, and fruits",
    geo_range: "Southern and Southeast Asia",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Elephas_maximus_%28Bandipur%29.jpg",
    id: 19,
  },
  {
    name: "Snow Leopard",
    latin_name: "Uncia uncia",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "2.5",
    length_max: "4.9",
    weight_min: "77",
    weight_max: "120",
    lifespan: "14",
    habitat:
      "Mountain regions, including grassland, scrubland, and open woodland",
    diet: "Primarily blue sheep and ibex; some other hoofed mammals, hares, rodents and birds",
    geo_range: "Central Asia",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG",
    id: 164,
  },
  {
    name: "Red-capped Cardinal",
    latin_name: "Paroaria coronata",
    animal_type: "Bird",
    active_time: "Diurnal",
    length_min: "0.54",
    length_max: "0.55",
    weight_min: "0.49",
    weight_max: "0.51",
    lifespan: "6",
    habitat: "Scrubland",
    diet: "Seeds and invertebrates",
    geo_range: "South America from Brazil to Argentina",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Paroaria_gularis%2C_Red-capped_Cardinal.jpg",
    id: 147,
  },
  {
    name: "Okapi",
    latin_name: "Okapia johnstoni",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "6.2",
    length_max: "8.6",
    weight_min: "400",
    weight_max: "700",
    lifespan: "16",
    habitat: "Forest",
    diet: "Leaves, grass, fruit and fungi",
    geo_range: "Democratic Republic of Congo, Africa",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Saint-Aignan_%28Loir-et-Cher%29._Okapi.jpg",
    id: 127,
  },
  {
    name: "Fire-bellied newt",
    latin_name: "Cynops pyrrhogaster pyrrhogaster",
    animal_type: "Amphibian",
    active_time: "Nocturnal",
    length_min: "0.35",
    length_max: "0.5",
    weight_min: "0.004",
    weight_max: "0.004",
    lifespan: "25",
    habitat: "Ponds, stream pools and lakes",
    diet: "Aquatic invertebrates",
    geo_range: "Japan",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Cynops_ensicauda_popei.jpg",
    id: 71,
  },
  {
    name: "Boa Constrictor",
    latin_name: "Boa constrictor",
    animal_type: "Reptile",
    active_time: "Nocturnal",
    length_min: "3.3",
    length_max: "13",
    weight_min: "120",
    weight_max: "140",
    lifespan: "30",
    habitat: "Forest and grassland",
    diet: "Mammals and birds",
    geo_range: "Central and South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Boa_constrictor%2C_Va%C5%88kovka%2C_Brno_%282%29.jpg",
    id: 42,
  },
  {
    name: "Dumeril's Ground Boa",
    latin_name: "Acrantopis dumerili",
    animal_type: "Reptile",
    active_time: "Nocturnal",
    length_min: "4",
    length_max: "6.5",
    weight_min: "15",
    weight_max: "20",
    lifespan: "30",
    habitat: "Dry forest",
    diet: "Small mammals, birds, lizards, and frogs",
    geo_range: "Southwestern Madagascar",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Dumeril%27s_Madagascar_ground_boa_%28Acrantophis_dumerili%29_male_Reniala.jpg",
    id: 62,
  },
  {
    name: "Screaming Hairy Armadillo",
    latin_name: "Chaetophractus vellerosus",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "1",
    length_max: "1.3",
    weight_min: "1.75",
    weight_max: "2",
    lifespan: "16",
    habitat: "Desert, grassland, scrubland, and forest",
    diet: "Plants, insects, and other small animals",
    geo_range: "Central South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Chaetophractus_vellerosus3.jpg",
    id: 160,
  },
  {
    name: "Mexican Wolf",
    latin_name: "Canis lupus baileyei",
    animal_type: "Mammal",
    active_time: "Nocturnal",
    length_min: "4.75",
    length_max: "5",
    weight_min: "60",
    weight_max: "80",
    lifespan: "11",
    habitat: "Mountain and forest",
    diet: "Elk, deer, peccaries, rabbits, rodents, and carrion",
    geo_range: "Arizona and New Mexico",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Mexican_Wolf_2_yfb-edit_1.jpg",
    id: 118,
  },
  {
    name: "Aardvark",
    latin_name: "Orycteropus afer",
    animal_type: "Mammal",
    active_time: "Nocturnal",
    length_min: "3.4",
    length_max: "4.2",
    weight_min: "88",
    weight_max: "143",
    lifespan: "12",
    habitat: "Woodland, scrubland, and grassland",
    diet: "Ants and termites",
    geo_range: "Central and Southern Africa",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/SanWild17.jpg",
    id: 1,
  },
  {
    name: "Salmon-Crested Cockatoo",
    latin_name: "Cacatua moluccensis",
    animal_type: "Bird",
    active_time: "Diurnal",
    length_min: "1.51",
    length_max: "1.71",
    weight_min: "1.5",
    weight_max: "2.2",
    lifespan: "80",
    habitat: "Forest and mountains",
    diet: "Seeds and fruit",
    geo_range: "Southern Moluccas, Indonesia",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cacatua_moluccensis_-Cincinnati_Zoo-8a.jpg",
    id: 157,
  },
  {
    name: "Howler Monkey",
    latin_name: "Alouatta caraya",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "1.5",
    length_max: "2",
    weight_min: "9",
    weight_max: "22",
    lifespan: "18",
    habitat: "Tropical forest",
    diet: "Leaves, flowers and fruit",
    geo_range: "South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Alouatta_guariba.jpg",
    id: 89,
  },
  {
    name: "Eurasian Eagle Owl",
    latin_name: "Bubo bubo",
    animal_type: "Bird",
    active_time: "Nocturnal",
    length_min: "2",
    length_max: "2.5",
    weight_min: "3.5",
    weight_max: "9",
    lifespan: "60",
    habitat: "Rocky areas, woodland, and grassland",
    diet: "Mammals, such as rabbits and rodents, and birds",
    geo_range: "Europe and Asia",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Bubo_bubo_3_%28Martin_Mecnarowski%29.jpg",
    id: 68,
  },
];

export const getAnimals = () => animals;

export const getAnimal = (id) =>
  animals.find((animal) => animal.id.toString() === id);