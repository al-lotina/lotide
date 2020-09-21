const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const copyOfBestTVShows = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length){ 
    for (let key in object1) {
      if (object1[key] !== object2[key]) {
        return false;  
      } 
    } 
    return true;
  } 
  return false;        
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) 
  ? console.log(`😁Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) 
  : console.log(`🙁Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); 
}

assertObjectsEqual(bestTVShowsByGenre, copyOfBestTVShows); 

module.exports = assertObjectsEqual;