const assertArraysEqual = require('../assertEqual');
const tail = require('../tail');

console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
