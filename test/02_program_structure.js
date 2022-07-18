const triangle = require("../02_program_structure/Looping-a-Triangle.js");
const assert = require("assert");

describe("Looping-a-Triangle", function () {
  describe("Valid parameters", function () {
    it("height 1", function () {
      const triagle = "#";
      assert.equal(triangle.getTriangle(1), triagle);
    });
    it("height 2", function () {
      const triagle = "#\n##";
      assert.equal(triangle.getTriangle(2), triagle);
    });
    it("height 3", function () {
      const triagle = "#\n##\n###";
      assert.equal(triangle.getTriangle(3), triagle);
    });
    it("height 5", function () {
      const triagle = "#\n##\n###\n####\n#####";
      assert.equal(triangle.getTriangle(5), triagle);
    });
  });
  describe("Invalid parameters", function () {
    it("height 0", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle(0), triagle);
    });
    it("height -1", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle(-1), triagle);
    });
    it("height 2.3", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle(2.3), triagle);
    });
    it("height {}", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle({}), triagle);
    });
    it("height 'a'", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle("a"), triagle);
    });
    it("height '2'", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle("2"), triagle);
    });
    it("height Infinity", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle(Infinity), triagle);
    });
    it("height NaN", function () {
      const triagle = undefined;
      assert.equal(triangle.getTriangle(NaN), triagle);
    });
  });
});
