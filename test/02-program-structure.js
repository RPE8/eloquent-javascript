const {
  getTriangle,
} = require("../02_program_structure/Looping-a-Triangle.js");
const { fizzBuzz } = require("../02_program_structure/FizzBuzz.js");
const { getChessboard } = require("../02_program_structure/Chessboard.js");

const assert = require("assert");

describe("Looping-a-Triangle", function () {
  describe("Valid parameters", function () {
    it("height 1", function () {
      const triagle = "#";
      assert.equal(getTriangle(1), triagle);
    });
    it("height 2", function () {
      const triagle = "#\n##";
      assert.equal(getTriangle(2), triagle);
    });
    it("height 3", function () {
      const triagle = "#\n##\n###";
      assert.equal(getTriangle(3), triagle);
    });
    it("height 5", function () {
      const triagle = "#\n##\n###\n####\n#####";
      assert.equal(getTriangle(5), triagle);
    });
  });
  describe("Invalid parameters", function () {
    it("height 0", function () {
      const triagle = undefined;
      assert.equal(getTriangle(0), triagle);
    });
    it("height -1", function () {
      const triagle = undefined;
      assert.equal(getTriangle(-1), triagle);
    });
    it("height 2.3", function () {
      const triagle = undefined;
      assert.equal(getTriangle(2.3), triagle);
    });
    it("height {}", function () {
      const triagle = undefined;
      assert.equal(getTriangle({}), triagle);
    });
    it("height 'a'", function () {
      const triagle = undefined;
      assert.equal(getTriangle("a"), triagle);
    });
    it("height '2'", function () {
      const triagle = undefined;
      assert.equal(getTriangle("2"), triagle);
    });
    it("height Infinity", function () {
      const triagle = undefined;
      assert.equal(getTriangle(Infinity), triagle);
    });
    it("height NaN", function () {
      const triagle = undefined;
      assert.equal(getTriangle(NaN), triagle);
    });
  });
});

describe("FizzBuzz", function () {
  it("up to 1", function () {
    const resp = "1\n";
    assert.equal(fizzBuzz(1), resp);
  });
  it("up to 2", function () {
    const resp = "1\n2\n";
    assert.equal(fizzBuzz(2), resp);
  });
  it("up to 3", function () {
    const resp = "1\n2\nFizz\n";
    assert.equal(fizzBuzz(3), resp);
  });
  it("up to 4", function () {
    const resp = "1\n2\nFizz\n4\n";
    assert.equal(fizzBuzz(4), resp);
  });
  it("up to 5", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\n";
    assert.equal(fizzBuzz(5), resp);
  });
  it("up to 6", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\nFizz\n";
    assert.equal(fizzBuzz(6), resp);
  });
  it("up to 7", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n";
    assert.equal(fizzBuzz(7), resp);
  });
  it("up to 10", function () {
    const resp = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n";
    assert.equal(fizzBuzz(10), resp);
  });
  it("up to 15", function () {
    const resp =
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n";
    assert.equal(fizzBuzz(15), resp);
  });
});

describe("Chessboard", function () {
  describe("Valid parameters", function () {
    it("1x1", function () {
      const resp = " ";
      assert.equal(getChessboard(1, 1), resp);
    });
    it("2x1", function () {
      const resp = " \n#";
      assert.equal(getChessboard(2, 1), resp);
    });
    it("1x2", function () {
      const resp = " #";
      assert.equal(getChessboard(1, 2), resp);
    });
    it("2x2", function () {
      const resp = " #\n# ";
      assert.equal(getChessboard(2, 2), resp);
    });
    it("3x2", function () {
      const resp = " #\n# \n #";
      assert.equal(getChessboard(3, 2), resp);
    });
    it("2x3", function () {
      const resp = " # \n# #";
      assert.equal(getChessboard(2, 3), resp);
    });
    it("3x3", function () {
      const resp = " # \n# #\n # ";
      assert.equal(getChessboard(3, 3), resp);
    });
    it("4x4", function () {
      const resp = " # #\n# # \n # #\n# # ";
      assert.equal(getChessboard(4, 4), resp);
    });
    it("5x5", function () {
      const resp = " # # \n# # #\n # # \n# # #\n # # ";
      assert.equal(getChessboard(5, 5), resp);
    });
  });

  describe("Invalid parameters", function () {
    it("'a' x 1", function () {
      const resp = undefined;
      assert.equal(getChessboard("a", 1), resp);
    });
    it("'a' x 'a'", function () {
      const resp = undefined;
      assert.equal(getChessboard("a", "a"), resp);
    });
    it("Infinity x 2", function () {
      const resp = undefined;
      assert.equal(getChessboard(Infinity, 2), resp);
    });
    it("-1 x 2", function () {
      const resp = undefined;
      assert.equal(getChessboard(-1, 2), resp);
    });
    it("2 x 2.3", function () {
      const resp = undefined;
      assert.equal(getChessboard(2, 2.3), resp);
    });
    it("1 x {}", function () {
      const resp = undefined;
      assert.equal(getChessboard(1, {}), resp);
    });
    it("NaN x 2", function () {
      const resp = undefined;
      assert.equal(getChessboard(NaN, 2), resp);
    });
  });
});
