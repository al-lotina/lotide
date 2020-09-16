const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) { 
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters (str) {
  const resultObj = {};
  for (let char of str) {
    if (char !== ' ') {
      if (resultObj[char]) {
        resultObj[char] += 1;
      } else {
       resultObj[char] = 1;
      } 
    } 
  }
  console.log(resultObj);
}

countLetters("lighthouse in the house");