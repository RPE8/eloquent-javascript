console.log("test'");
const BALLOON = document.getElementById("balloon");

function trottle(fn) {
  let scheduled = null;
  return (event) => {
    if (!scheduled) {
      setTimeout(() => {
        fn(event);
        scheduled = null;
      }, 200);
    }
    scheduled = fn;
  };
}

function inflate() {
  console.log("inflate");
  const size = Number(BALLOON.style.fontSize.split("px")[0]);
  if (size === 100) {
    BALLOON.textContent = "💥";
    window.removeEventListener("keydown", keyPressHandler);
    return;
  }
  BALLOON.style.fontSize = size + 10 + "px";
}

function deflate() {
  console.log("deflate");
  const size = Number(BALLOON.style.fontSize.split("px")[0]);
  if (size === 10) {
    return;
  }
  BALLOON.style.fontSize = size - 10 + "px";
}

const trottledInflate = trottle(inflate);
const trottledDeflate = trottle(deflate);

function keyPressHandler(event) {
  console.log("keyPress");
  if (event.key === "ArrowUp") {
    trottledInflate();
  } else if (event.key === "ArrowDown") {
    trottledDeflate();
  }
}

window.addEventListener("keydown", keyPressHandler);
