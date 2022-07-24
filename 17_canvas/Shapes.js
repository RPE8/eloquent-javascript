console.log("test");

let trapezoid = document.querySelector("#trapezoid").getContext("2d");
let diamond = document.querySelector("#diamond").getContext("2d");
//
function createTrapezoid(cx, x, y, width, height, diffMul) {
  const diff = width * diffMul;
  const paddingX = x + 5;
  const paddingY = y + 5;
  cx.beginPath();
  cx.moveTo(paddingX + diff, paddingY);
  cx.lineTo(paddingX, paddingY + height);
  cx.lineTo(paddingX + width, paddingY + height);
  cx.lineTo(paddingX + width - diff, paddingY);
  // cx.lineTo(paddingX + +20, paddingY);
  cx.closePath();
  cx.stroke();
}

function createDiamond(cx, x, y, height, width) {
  const paddingX = x;
  const paddingY = y;
  cx.translate(paddingX + width / 2, paddingY + height / 2);
  cx.rotate(0.8);
  cx.fillStyle = "red";
  cx.fillRect(-paddingX, -paddingY, width, height);
}

createTrapezoid(trapezoid, 0, 0, 100, 50, 0.1);

createDiamond(diamond, 35, 0, 50, 50);
