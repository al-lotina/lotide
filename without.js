function without (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    } 
  } 
  console.log(newArr);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
