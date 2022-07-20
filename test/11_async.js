const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const Promise_all = require("../11_async/Building-promise-all.js");

console.log(Promise_all);

describe("Promise_all", () => {
  it("Should return []", async () => {
    const response = await Promise_all([]);
    expect(response).to.deep.equal([]);
  });
  it("Should return [1,2,3]", async () => {
    function soon(val) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(val), 0);
      });
    }
    const response = await Promise_all([soon(1), soon(2), soon(3)]);
    expect(response).to.deep.equal([1, 2, 3]);
  });
});
