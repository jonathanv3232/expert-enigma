function mostFreqChar(str) {
  let max = 0;
  let letter = "";
  let counter = {};
  for(let i = 0; i < str.length; i++) {
    //build the counter
    if(counter[str[i]]) counter[str[i]] = 1;
    else counter[str[i]]++;
    //keep track of the max
    if(counter[str[i]] > max) {
      max = counter[str[i]];
      letter = str[i];
    }
  }
    console.log(letter);
  return letter;
}


console.log(mostFreqChar("hello"));
console.log(mostFreqChar("hhello"));
console.log(mostFreqChar("00011"));
