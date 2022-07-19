const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const Vector = require("../06_object/A-vector-type.js");

describe("Vector", () => {
  it("Vector should be created succesfully", () => {
    const vector = new Vector(1, 2);
    (vector instanceof Vector).should.equal(true);
  });

  it("Vector should have x and y props", () => {
    const vector = new Vector(1, 2);
    vector.getX().should.equal(1);
    vector.getY().should.equal(2);
  });

  it("vectors should be succesfully added to each other", () => {
    const vector = new Vector(1, 2);
    const vector2 = new Vector(2, 3);
    const vector3 = vector.plus(vector2);

    vector3.getX().should.equal(3);
    vector3.getY().should.equal(5);
  });

  it("vectors should be succesfully subtracted from each other", () => {
    const vector = new Vector(1, 2);
    const vector2 = new Vector(2, 3);
    const vector3 = vector.minus(vector2);

    vector3.getX().should.equal(-1);
    vector3.getY().should.equal(-1);
  });

  it("vector's length getter should return calculated length", () => {
    const vector = new Vector(3, 4);

    vector.length.should.equal(5);
  });

  // vector.getX().should.equal(1);
  // vector.getY().should.equal(2);
});
