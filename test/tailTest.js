// const assertArraysEqual = require('../assertEqual');
const tail = require('../tail');

const assert = require('chai').assert;

// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
// assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });  
});