// function wiout (source, itemsToRemove) {
//   let newArr = [];
//   let removedArr = [];
//   for (let i = 0; i < itemsToRemove.length; i++) {
//     if (source.includes(itemsToRemove[i])) {
//       newArr.push(source[i]);       
//     } 
//   }
//   console.log(newArr);
// }

const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    } 
  } 
  console.log(newArr);
};

without([1, 2, 3], [1, 5, 3]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

module.exports = without;
