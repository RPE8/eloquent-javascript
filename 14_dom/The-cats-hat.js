let cat = document.querySelector("img");
let hat = document.querySelector("#hat");

let angle = Math.PI / 2;
function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  cat.style.top = Math.sin(angle) * 20 + 20 + "px";
  cat.style.left = Math.cos(angle) * 200 + 200 + "px";
  hat.style.top = Math.sin(angle + Math.PI) * 20 + 20 + "px";
  hat.style.left = Math.cos(angle + Math.PI) * 200 + 200 + "px";
  requestAnimationFrame((newTime) => animate(newTime, time));
}
requestAnimationFrame(animate);
