function range(start, end, step = 1) {
  let array = [];
  const newStep = Math.abs(step);
  let [newStart, newEnd] = [start, end].sort((a, b) => a - b);
  for (let i = newStart; i <= newEnd; i += newStep) {
    array.push(i);
  }

  if (start !== newStart || newStep !== step) {
    array.reverse();
  }

  return array;
}

function sum(array) {
  return array.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
}

module.exports = { range, sum };
