// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const newStr = str.toLowerCase().split('');
  console.log(newStr);
  let tot = 0;
  for (let i = 0; i < newStr.length; i += 1){
    if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u'){
      tot += 1;
    }
  }
  return tot;
}

module.exports = vowels;