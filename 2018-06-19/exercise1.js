var superHeroes = [
  { hero: "Batman", identity: "Bruce Wayne" },
  { hero: "Spiderman", identity: "Peter Parker" },
  { hero: "The Flash", identity: "Barry Allen" },
];

// ==========================

const revealHero = hero => `${hero.hero} is ${hero.identity}`;

const revealedSupers = superHeroes.map(revealHero);

const join = (sep, array) => array.reduce((acc, item) => acc + sep + item);

console.log(join(", ", revealedSupers));
