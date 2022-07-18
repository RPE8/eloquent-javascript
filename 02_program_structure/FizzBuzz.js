function fizzBuzz(upTo) {
  let finalString = "";
  for (let i = 1; i <= upTo; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      finalString += "FizzBuzz\n";
    } else if (i % 3 === 0) {
      finalString += "Fizz\n";
    } else if (i % 5 === 0) {
      finalString += "Buzz\n";
    } else {
      finalString += `${i}\n`;
    }
  }

  return finalString;
}

module.exports = { fizzBuzz };
