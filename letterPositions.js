function letterPositions (sentence) {
  const Obj = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (Obj[sentence[i]]) {
        const oldArr = Obj[sentence[i]];
        Obj[sentence[i]] = [...oldArr, i];
      } else {
       Obj[sentence[i]] = [i];
      } 
    } 
  }
  console.log(Obj); 
}
letterPositions("lighthouse in the house");