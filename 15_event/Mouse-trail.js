const FOLLOWERS = [];

function createElement({ tag, styles = {}, attributes = [] } = {}) {
  const element = document.createElement(tag);
  attributes.forEach((attr) => {
    element.setAttribute(attr[0], attr[1]);
  });
  if (styles) {
    for (const [prop, value] of Object.entries(styles)) {
      element.style[prop] = value;
    }
  }
  return element;
}

for (let i = 10; i > 0; i--) {
  FOLLOWERS.push(
    createElement({
      tag: "div",
      styles: {
        position: "absolute",
        top: "0px",
        left: `${10 * (i * 4)}px`,
        width: "20px",
        height: "20px",
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
      },
    })
  );
}

FOLLOWERS.forEach((follower, i) => {
  document.getElementsByTagName("body")[0].appendChild(follower);
});

window.addEventListener("mousemove", (e) => {
  console.log({ y: e.pageY, x: e.pageX });
  FOLLOWERS.forEach((follower, i) => {
    follower.style.left = `${
      e.pageX + Math.cos((360 / FOLLOWERS.length) * i) * 100
    }px`;
    follower.style.top = `${
      e.pageY + Math.sin((360 / FOLLOWERS.length) * i) * 100
    }px`;
  });
});
