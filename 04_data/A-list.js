function arrayToList(array = []) {
  if (array.length) {
    return { value: array.splice(0, 1)[0], rest: arrayToList(array) };
  } else {
    return null;
  }
}

function listToArray(list = {}, array = []) {
  array.push(list.value);
  return list.rest === null ? array : listToArray(list.rest, array);
}

function prepend(current, rest) {
  return {
    value: current,
    rest,
  };
}

function nth(list, pos) {
  if (pos === 0) {
    return list.value;
  }

  return nth(list.rest, --pos);
}

module.exports = { arrayToList, listToArray, prepend, nth };
