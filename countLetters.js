const countLetters = function (str) {
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
};

module.exports = countLetters;