function isEven(number) {
  if (number < 0) {
    number = Math.abs(number);
  }

  if (number === 0) {
    return true;
  }

  if (number === 1) {
    return false;
  }

  return isEven(number - 2);
}

module.exports = { isEven };
