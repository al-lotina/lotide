const tail = function(arr) {
  let lastEl = [];
  for (let i = 1; i < arr.length; i++) {
    lastEl.push(arr[i]);
  }
  return lastEl;
};

module.exports = tail;


