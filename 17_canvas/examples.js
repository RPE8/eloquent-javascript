let cx = document.querySelector("canvas").getContext("2d");
let img = document.createElement("img");
img.src = "./player_big.png";
let spriteW = 48,
  spriteH = 60;
img.addEventListener("load", () => {
  let cycle = 0;
  setInterval(() => {
    cx.clearRect(0, 0, spriteW, spriteH);
    cx.drawImage(
      img,
      // source rectangle
      cycle * spriteW,
      0,
      spriteW,
      spriteH,
      // destination rectangle
      0,
      0,
      spriteW,
      spriteH
    );
    cycle = (cycle + 1) % 8;
  }, 120);
});
