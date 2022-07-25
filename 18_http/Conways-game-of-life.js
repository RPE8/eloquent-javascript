console.log("test");
const grid = document.getElementById("grid");
const button = document.getElementById("next");
const height = 20;
const width = 20;
let checkboxes = [];
let state = [];

button.addEventListener("click", () => {
  applyState(calculateNewState(state));
});

grid.addEventListener("click", (event) => {
  if (event.target.tagName.toUpperCase() === "INPUT") {
    applyState(generateStateFromCheckboxes(checkboxes));
  }
});

// Checked state is controlled mainly by DOM.
function drawEmptyGrid(grid, width, height) {
  for (let i = 0; i < height; i++) {
    let line = [];
    for (let j = 0; j < width; j++) {
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      grid.appendChild(checkbox);
      line.push(checkbox);
    }
    checkboxes.push(line);
    grid.appendChild(document.createElement("br"));
  }
}

function drawGridFromCheckboxes(checkboxes) {
  grid.replaceChildren();
}

function checkRandomCheckbox(checkboxes) {
  for (let i = 0; i < checkboxes.length; i++) {
    for (let j = 0; j < checkboxes[i].length; j++) {
      const checked = Math.random() > 0.7;
      if (checked) {
        checkboxes[i][j].setAttribute("checked", "");
      }
    }
  }
}

// calculate;

function generateInitialState() {
  let state = [];
  for (let i = 0; i < height; i++) {
    let line = [];
    state.push(line);
    for (let j = 0; j < width; j++) {
      line.push(Math.random() > 0.7);
    }
  }
  return state;
}

function applyState(newState) {
  checkboxes.forEach((line, i) => {
    line.forEach((checkbox, j) => {
      if (newState[i][j]) {
        checkbox.setAttribute("checked", "");
      } else {
        checkbox.removeAttribute("checked");
      }
    });
  });
  state = newState;
}

function calculateNewState(state) {
  let newState = [];
  state.forEach((line, i) => {
    let newLine = [];
    newState.push(newLine);
    line.forEach((checked, j) => {
      const amount = _amountOfCellAround(state, i, j);
      if (checked) {
        if (amount < 2 || amount > 3) {
          newLine.push(false);
        } else {
          newLine.push(true);
        }
      } else if (amount === 3) {
        newLine.push(true);
      } else {
        newLine.push(false);
      }
    });
  });
  return newState;
}

function generateStateFromCheckboxes(checkboxes) {
  let newState = [];
  checkboxes.forEach((line) => {
    let newLine = [];
    newState.push(newLine);
    line.forEach((checkbox) => {
      newLine.push(checkbox.checked);
    });
  });
  return newState;
}

function _amountOfCellAround(state, i, j) {
  let amount = 0;
  if (state[i]?.[j + 1]) {
    amount += 1;
  }
  if (state[i]?.[j - 1]) {
    amount += 1;
  }
  if (state[i + 1]?.[j]) {
    amount += 1;
  }
  if (state[i - 1]?.[j]) {
    amount += 1;
  }
  if (state[i + 1]?.[j + 1]) {
    amount += 1;
  }
  if (state[i - 1]?.[j + 1]) {
    amount += 1;
  }
  if (state[i + 1]?.[j - 1]) {
    amount += 1;
  }
  if (state[i - 1]?.[j - 1]) {
    amount += 1;
  }
  return amount;
}

drawEmptyGrid(grid, 20, 20);
state = generateInitialState();
applyState(state);

// checkRandomCheckbox(checkboxes);
