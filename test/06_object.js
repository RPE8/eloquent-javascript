const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const Vector = require("../06_object/A-vector-type.js");
const Group = require("../06_object/Groups.js");
const IterableGroup = require("../06_object/Iterable-groups.js");

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
});

describe("Group", () => {
  it("Group should be created succesfully", () => {
    const group = new Group();
    (group instanceof Group).should.equal(true);
  });
  it("Group from  & has methods should work correctly", () => {
    const group = Group.from([10, 20]);
    group.has(10).should.equal(true);
    group.has(20).should.equal(true);
    group.has(30).should.equal(false);
    group.add(30);
    group.has(30).should.equal(true);
    group.has(10).should.equal(true);
    group.has(20).should.equal(true);
    group.delete(10);
    group.has(30).should.equal(true);
    group.has(10).should.equal(false);
    group.has(20).should.equal(true);
  });
});

describe("Iterable group", () => {
  it("Iterable Group should be created succesfully", () => {
    const group = new IterableGroup();
    (group instanceof IterableGroup).should.equal(true);
  });
  it("Iterable Group from  & has methods should work correctly", () => {
    const group = IterableGroup.from([10, 20]);
    group.has(10).should.equal(true);
    group.has(20).should.equal(true);
    group.has(30).should.equal(false);
    group.add(30);
    group.has(30).should.equal(true);
    group.has(10).should.equal(true);
    group.has(20).should.equal(true);
    group.delete(10);
    group.has(30).should.equal(true);
    group.has(10).should.equal(false);
    group.has(20).should.equal(true);
  });
  it("Iterable Group should iterable", () => {
    const group = IterableGroup.from([10, 20]);
    let values = [];
    for (const value of group) {
      values.push(value);
    }
    values.join(" ").should.equal("10 20");
  });
});
