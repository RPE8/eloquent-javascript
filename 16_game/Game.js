import Level from "./Level.js";
import State from "./State.js";
import DOMDisplay from "./DOMDisplay.js";

const arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);
const levelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#................#..
..#....++++++++++++#..
..##################..
......................`;
const l2 = `
.............
.@...o.......
`;
// const simpleLevel = new Level(levelPlan);
// const display = new DOMDisplay(document.body, simpleLevel);
// display.syncState(State.start(simpleLevel));

function trackKeys(keys) {
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) return;
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  return new Promise((resolve) => {
    runAnimation((time) => {
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        // if
        resolve(state.status);
        return false;
      }
    });
  });
}

async function runGame(plans, Display) {
  for (let level = 0; level < plans.length; ) {
    let status = await runLevel(new Level(plans[level]), Display);
    if (status == "won") level++;
  }
  console.log("You've won!");
}

runGame([levelPlan, l2], DOMDisplay);
