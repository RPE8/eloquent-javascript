const { everywhere, bigOak } = require("./crow-tech.js");
// console.log(everywhere((nest) => console.log(nest)));

async function readScalpelStorage(nest) {
  return new Promise((resolve) => {
    nest.readStorage("scalpel", (info) => {
      resolve(info);
    });
  });
}

async function locateScalpel(nest) {
  let currentNest = nest;

  // everywhere((data) => console.log(data));
  for (let i = 0; i < 5; i++) {
    const next = await readScalpelStorage(nest);
    if (next === currentNest.name) {
      return currentNest.name;
    }

    const nextInNeighbors = currentNest.neighbors.indexOf(next.name);

    if (nextInNeighbors !== -1) {
      // currentNest =
    }
  }
}

locateScalpel(bigOak).then((nest) => {
  console.log(nest);
});
