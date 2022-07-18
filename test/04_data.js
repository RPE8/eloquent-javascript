const { range, sum } = require("../04_data/The-sum-of-a-range.js");
const {
  arrayToList,
  listToArray,
  prepend,
  nth,
} = require("../04_data/A-list.js");
const { deepEqual } = require("../04_data/Deep-comparison.js");

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

describe("A list", () => {
  describe("arrayToList", () => {
    it("arrayToList([1,2,3,4,5])", () => {
      assert.deepStrictEqual(arrayToList([1, 2, 3, 4, 5]), {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: { value: 4, rest: { value: 5, rest: null } },
          },
        },
      });
    });
    it("arrayToList([1])", () => {
      assert.deepStrictEqual(arrayToList([1]), {
        value: 1,
        rest: null,
      });
    });
    it("arrayToList([])", () => {
      assert.equal(arrayToList([]), null);
    });
  });
  describe("listToArray(arrayToList)", () => {
    it("listToArray(arrayToList([10, 20, 30]))", () => {
      assert.deepStrictEqual(
        listToArray(arrayToList([10, 20, 30])),
        [10, 20, 30]
      );
    });
  });
  describe("prepend", () => {
    it("prepend(10, prepend(20, null))", () => {
      assert.deepStrictEqual(prepend(10, prepend(20, null)), {
        value: 10,
        rest: { value: 20, rest: null },
      });
    });
  });
  describe("nth", () => {
    it("nth(arrayToList([10, 20, 30]), 1)", () => {
      assert.equal(nth(arrayToList([10, 20, 30]), 1), 20);
    });
  });
});

describe("Deep comparison", () => {
  const obj = { here: { is: "an" }, object: 2 };
  it("deepEqual(obj, obj)", () => {
    assert.equal(deepEqual(obj, obj), true);
  });
  it("deepEqual(obj, {here: 1, object: 2})", () => {
    assert.equal(deepEqual(obj, { here: 1, object: 2 }), false);
  });
  it("deepEqual(obj, {here: {is: 'an'}, object: 2})", () => {
    assert.equal(deepEqual(obj, { here: { is: "an" }, object: 2 }), true);
  });
});
