var biggestWord = phrase => {
  let word = phrase.split(' ');
  var biggestOne = '';
  for (let i = 0; i < word.length; i += 1){
    if (word[i].length > biggestOne.length){
      biggestOne = word[i];
    }
  }
  return biggestOne;
}
console.log(biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));