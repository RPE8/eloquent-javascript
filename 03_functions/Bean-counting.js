function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, lookup) {
  let amount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === lookup) {
      amount++;
    }
  }

  return amount;
}

module.exports = { countBs, countChar };
