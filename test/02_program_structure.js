const triangle = require("../02_program_structure/Looping-a-Triangle.js");
const fizzBuzz = require("../02_program_structure/FizzBuzz.js");

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

describe("FizzBuzz", function () {
  it("up to 1", function () {
    const resp = "1\n";
    assert.equal(fizzBuzz.fizzBuzz(1), resp);
  });
  it("up to 2", function () {
    const resp = "1\n2\n";
    assert.equal(fizzBuzz.fizzBuzz(2), resp);
  });
  it("up to 3", function () {
    const resp = "1\n2\nFizz\n";
    assert.equal(fizzBuzz.fizzBuzz(3), resp);
  });
  it("up to 4", function () {
    const resp = "1\n2\nFizz\n4\n";
    assert.equal(fizzBuzz.fizzBuzz(4), resp);
  });
  it("up to 5", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\n";
    assert.equal(fizzBuzz.fizzBuzz(5), resp);
  });
  it("up to 6", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\nFizz\n";
    assert.equal(fizzBuzz.fizzBuzz(6), resp);
  });
  it("up to 7", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n";
    assert.equal(fizzBuzz.fizzBuzz(7), resp);
  });
  it("up to 10", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n";
    assert.equal(fizzBuzz.fizzBuzz(10), resp);
  });
  it("up to 15", function () {
    const resp =
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n";
    assert.equal(fizzBuzz.fizzBuzz(15), resp);
  });
});
