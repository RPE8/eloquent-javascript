// let cx = document.querySelector("canvas").getContext("2d");
// let img = document.createElement("img");
// img.src = "./player_big.png";
// let spriteW = 48,
//   spriteH = 60,
//   posH = 100,
//   posW = 100;
// img.addEventListener("load", () => {
//   let cycle = 0;
//   setInterval(() => {
//     cx.clearRect(posW, posH, spriteW, spriteH);
//     cx.drawImage(
//       img,
//       // source rectangle
//       cycle * spriteW,
//       0,
//       spriteW,
//       spriteH,
//       // destination rectangle
//       posH,
//       posW,
//       spriteW,
//       spriteH
//     );
//     cycle = (cycle + 1) % 8;
//   }, 120);
//   cx.translate(100 + posW / 2, 0);
//   cx.scale(-1, 1);
//   cx.translate(-(100 + posW / 2), 0);
// });

// let cx = document.querySelector("canvas").getContext("2d");
// cx.scale(-1, 1);
// cx.beginPath();
// cx.arc(-50, 50, 40, 0, 7);
// cx.lineWidth = 3;
// cx.stroke();

let cx = document.querySelector("canvas").getContext("2d");
function branch(length, angle, scale) {
  cx.fillRect(0, 0, 1, length);
  if (length < 8) return;
  cx.save();
  cx.translate(0, length);
  cx.rotate(-angle);
  branch(length * scale, angle, scale);
  cx.rotate(2 * angle);
  branch(length * scale, angle, scale);
  // cx.restore();
}
cx.translate(200, 0);
cx.scale(0.5, 0.5);
branch(60, 0.5, 0.8);
