// command line argument exercise to be run in Terminal

let newArr = process.argv.slice(2);
let str = '';
for (let item of newArr) {  
  for (let i = 1; i < item.length; i++) {
  str += item[i];
  }
  str += item[0] + 'ay ';
}  
console.log(str);

  