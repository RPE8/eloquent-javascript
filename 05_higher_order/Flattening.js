function flatten(array) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    }

    acc.push(curr);
    return acc;
  }, []);
}

module.exports = { flatten };
