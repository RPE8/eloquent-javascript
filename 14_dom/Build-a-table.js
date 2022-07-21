const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function drawTable(mountains = []) {
  const container = document.getElementById("mountains");
  let th = null;
  let keys = [];
  if (mountains.length) {
    tr = createRow();
    keys = Object.keys(mountains[0]);
    keys.forEach((key) => {
      const th = createHeaderCell();
      th.textContent = key;
      tr.appendChild(th);
    });
    container.appendChild(tr);
  }
  mountains.map((data) => {
    const tr = createRow();

    keys.forEach((key) => {
      let styles = {};
      let attributes = [];
      if (typeof data[key] === "number") {
        styles.textAlign = "right";
      }
      const td = createDataCell({ styles, attributes });
      td.textContent = data[key];
      tr.appendChild(td);
    });

    container.appendChild(tr);
  });
}

function createRow({ styles = {}, attributes = [] } = {}) {
  const tr = createElement({ tag: "tr", styles, attributes });
  return tr;
}

function createDataCell({ styles = {}, attributes = [] } = {}) {
  const td = createElement({ tag: "td", styles, attributes });
  return td;
}

function createHeaderCell({ styles = {}, attributes = [] } = {}) {
  const th = createElement({ tag: "th", styles, attributes });
  return th;
}

function createElement({ tag, styles, attributes }) {
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

drawTable(MOUNTAINS);
