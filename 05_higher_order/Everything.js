function every(array, fnPredicate) {
  for (let i = 0; i < array.length; i++) {
    if (!fnPredicate(array[i])) {
      return false;
    }
  }

  return true;
}

module.exports = { every };
