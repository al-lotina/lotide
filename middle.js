/*
function eqArrays (arr1, arr2) {
  if (arr1.length === arr2.length){ 
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    } 
    return true;
  } 
  return false;
}

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) 
   ? console.log(`😁Assertion Passed: ${actual} === ${expected}`) 
   : console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);      
}
*/
function middle (arr) {
  let newArr = [];
  if (arr.length === 1 || arr.length === 2) {
    newArr = [] 
  } 
  else if (arr.length % 2 === 1) {
    newArr.push(arr[Math.floor(arr.length/2)])
  }
  else if (arr.length % 2 === 0) {
    newArr.push(arr[arr.length/2 - 1]);
    newArr.push(arr[arr.length/2]);
  }
  console.log(newArr);
}  

module.exports = middle;

// middle([1]) // => []
// middle([1, 2]) // => []

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6, 3, 8]) // => [4, 5]
