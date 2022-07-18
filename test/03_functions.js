const { min } = require("../03_functions/Minimum.js");

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
