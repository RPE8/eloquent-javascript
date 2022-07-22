import Level from "./Level.js";
import State from "./State.js";
import DOMDisplay from "./DOMDisplay.js";

const levelPlan = `
......................
..#................#..
..#................#..
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
  down.removeListener = () => {
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
  };
  return down;
}

function trackPause(keys) {
  let states = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      if (event.type === "keyup") {
        window.addEventListener("keydown", track);
        return;
      }
      states["paused"] = !states["paused"];
      event.preventDefault();
      window.removeEventListener("keydown", track);
    }
  }
  states.removeListener = () => {
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
  };
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return states;
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

function runLevel({ level, Display, arrowKeys, gameStateKeys }) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  return new Promise((resolve) => {
    runAnimation((time) => {
      if (gameStateKeys?.paused) return;
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
  const arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);
  const gameStateKeys = trackPause(["Escape"]);

  let lives = 3;
  for (let level = 0; level < plans.length; ) {
    console.log(lives);
    let status = await runLevel({
      level: new Level(plans[level]),
      Display,
      arrowKeys,
      gameStateKeys,
    });
    switch (status) {
      case "won": {
        level++;
        break;
      }
      case "lost": {
        lives--;
        if (lives <= 0) {
          console.log("GAME OVER");
          level = 0;
          lives = 3;
          continue;
        }
      }
    }
  }
  console.log("You've won!");
  arrowKeys.removeListener();
  gameStateKeys.removeListener();
}

runGame([levelPlan, l2], DOMDisplay);
