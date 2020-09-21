const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if(obj[key] === val) {
      return key;
    }
  }
}

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // drama
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // undefined
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse")); // sci_fi

module.exports = findKeyByValue;