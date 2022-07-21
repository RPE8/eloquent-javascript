function byTagName(node = document.documentElement, tag, tags = []) {
  if (node.nodeName.toLowerCase() === tag) {
    tags.push(node);
  }

  const childs = node.childNodes;

  if (!childs.length) {
    return null;
  }

  childs.forEach((child) => {
    byTagNameRec(child, tag, tags);
  });

  return tags;
}

console.log(byTagNameRec(document.body, "h1").length);
// → 1
console.log(byTagNameRec(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagNameRec(para, "span").length);
