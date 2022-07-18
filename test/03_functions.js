const { min } = require("../03_functions/Minimum.js");
const { isEven } = require("../03_functions/Recursion.js");

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
