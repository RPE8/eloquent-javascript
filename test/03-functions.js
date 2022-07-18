const { min } = require("../03_functions/Minimum.js");
const { isEven } = require("../03_functions/Recursion.js");
const { countBs, countChar } = require("../03_functions/Bean-counting.js");

const assert = require("assert");

describe("Minimum", function () {
  it("min(1,2)", function () {
    assert.equal(min(1, 2), 1);
  });
  it("min(1,-2)", function () {
    assert.equal(min(1, -2), -2);
  });
  it("min(0,0)", function () {
    assert.equal(min(0, 0), 0);
  });
  it("min(1,0)", function () {
    assert.equal(min(1, 0), 0);
  });
  it("min(1,-1)", function () {
    assert.equal(min(1, -1), -1);
  });
});

describe("Recursion", function () {
  it("isEven(0)", function () {
    assert.equal(isEven(0), true);
  });
  it("isEven(1)", function () {
    assert.equal(isEven(1), false);
  });
  it("isEven(50)", function () {
    assert.equal(isEven(50), true);
  });
  it("isEven(75)", function () {
    assert.equal(isEven(75), false);
  });
  it("isEven(-1)", function () {
    assert.equal(isEven(-1), false);
  });
  it("isEven(-50)", function () {
    assert.equal(isEven(-50), true);
  });
  it("isEven(-75)", function () {
    assert.equal(isEven(-75), false);
  });
});

describe("Bean counting", function () {
  describe("countBs", function () {
    it("countBs('BBC')", function () {
      assert.equal(countBs("BBC"), 2);
    });
    it("countBs('C')", function () {
      assert.equal(countBs("C"), 0);
    });
    it("countBs('C45B')", function () {
      assert.equal(countBs("C45B"), 1);
    });
    it("countBs('')", function () {
      assert.equal(countBs(""), 0);
    });
  });
  describe("countChar", function () {
    it("countChar('kakkerlak', 'k')", function () {
      assert.equal(countChar("kakkerlak", "k"), 4);
    });
    it("countChar('kakkerlak', 'y')", function () {
      assert.equal(countChar("kakkerlak", "y"), 0);
    });
    it("countChar('kakkerlak', 'e')", function () {
      assert.equal(countChar("kakkerlak", "e"), 1);
    });
    it("countChar('', 'k')", function () {
      assert.equal(countChar("", "k"), 0);
    });
  });
});
