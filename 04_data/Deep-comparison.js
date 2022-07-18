function deepEqual(compare, compareWith) {
  const compareKeys = Object.keys(compare);
  const compareWithKeys = Object.keys(compareWith);

  const compareLength = compareKeys.length;

  if (compareKeys.length !== compareWithKeys.length) {
    return false;
  }

  for (let i = 0; i < compareLength; i++) {
    if (compareWithKeys.indexOf(compareKeys[i]) === -1) {
      return false;
    }
    if (typeof compare[compareKeys[i]] === "object") {
      if (!deepEqual(compare[compareKeys[i]], compareWith[compareKeys[i]])) {
        return false;
      }
    }
  }

  return true;
}

module.exports = { deepEqual };
