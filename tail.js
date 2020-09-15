const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let lastEl = [];
  for (let i = 1; i < arr.length; i++) {
    lastEl.push(arr[i]);
  }
  return lastEl.toString();
};

console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"].toString());
