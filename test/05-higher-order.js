const { flatten } = require("../05_higher_order/Flattening.js");

const assert = require("assert");

describe("Flattening", () => {
  it("flatten([[1, 2, 3], [4, 5], [6]])", () => {
    assert.deepStrictEqual(
      flatten([[1, 2, 3], [4, 5], [6]]),
      [1, 2, 3, 4, 5, 6]
    );
  });
});
