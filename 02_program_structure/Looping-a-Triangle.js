function getTriangle(height) {
  if (!Number.isInteger(height) || !height || height < 0) {
    return undefined;
  }

  if (height === 1) {
    return "#";
  }

  let triangle = "";

  for (let i = 1; i <= height; i++) {
    triangle += `${"#".repeat(i)}${i !== height ? "\n" : ""}`;
  }

  return triangle;
}

module.exports = { getTriangle };
