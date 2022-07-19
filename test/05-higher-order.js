const { flatten } = require("../05_higher_order/Flattening.js");
const { loop } = require("../05_higher_order/Your-own-loop.js");
const { every } = require("../05_higher_order/Everything.js");

const assert = require("assert");

describe("Flattening", () => {
  it("flatten([[1, 2, 3], [4, 5], [6]])", () => {
    assert.deepStrictEqual(
      flatten([[1, 2, 3], [4, 5], [6]]),
      [1, 2, 3, 4, 5, 6]
    );
  });
});

describe("Your own loop", () => {
  it("loop(3, n => n > 0, n => n - 1, () => sum += i))", () => {
    let sum = 0;
    loop(
      3,
      (n) => n > 0,
      (n) => n - 1,
      (i) => {
        sum += i;
      }
    ),
      assert.equal(sum, 6);
  });
});

describe("Everything", () => {
  it("every([1, 3, 5], n => n < 10))", () => {
    assert.equal(
      every([1, 3, 5], (n) => n < 10),
      true
    );
  });
  it("every([2, 4, 16], n => n < 10)", () => {
    assert.equal(
      every([2, 4, 16], (n) => n < 10),
      false
    );
  });
  it("every([], n => n < 10)", () => {
    assert.equal(
      every([], (n) => n < 10),
      true
    );
  });
});
