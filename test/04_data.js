const { range, sum } = require("../04_data/The-sum-of-a-range.js");

const assert = require("assert");

describe("The sum of the range", () => {
  describe("range", () => {
    it("range(1,2)", () => {
      assert.deepStrictEqual(range(1, 2), [1, 2]);
    });
    it("range(1,1)", () => {
      assert.deepStrictEqual(range(1, 1), [1]);
    });
    it("range(3,5)", () => {
      assert.deepStrictEqual(range(3, 5), [3, 4, 5]);
    });
    it("range(0,10)", () => {
      assert.deepStrictEqual(range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("range(0,0)", () => {
      assert.deepStrictEqual(range(0, 0), [0]);
    });

    it("range(2,4,2)", () => {
      assert.deepStrictEqual(range(2, 4, 2), [2, 4]);
    });
    it("range(1,10,2)", () => {
      assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
    });
    it("range(5,2,-1)", () => {
      assert.deepStrictEqual(range(5, 2, -1), [5, 4, 3, 2]);
    });
  });

  describe("sum", () => {
    it("sum([1,2])", () => {
      assert.equal(sum([1, 2]), 3);
    });
    it("sum([1,5])", () => {
      assert.equal(sum([1, 2, 3, 4, 5]), 15);
    });
    it("sum([])", () => {
      assert.equal(sum([]), 0);
    });
  });

  describe("sum(range)", () => {
    it("sum(range(1, 10))", () => {
      assert.equal(sum(range(1, 10)), 55);
    });
  });
});
