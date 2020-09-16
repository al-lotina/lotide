// The code below won't return any value if run in here as there are no arguments passed into the code.
// To run in Terminal from containing directory: node reverse.js arg1 arg2 ...etc
let newArr = process.argv.slice(2);
for (let item of newArr) {
  let finalArr = [];
  for (let i = item.length - 1; i >= 0; i--) {
  finalArr.push(item[i]);
  }
  console.log(finalArr.join(''));
}
