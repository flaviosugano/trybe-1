const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = [];
  let index = 1;
  for (let i = 0; i < characters.length; i += 1) {
    if (characters[i] === 'a' || characters[i] === 'o' || characters[i] === 'i' || characters[i] === 'e' ||characters[i] === 'u') {
    results.push([index]);
    index++;
    } 
    else {
      results.push(characters[i]);
    }
  }
  let newResult = results.join('');
  return newResult;
};

console.log(removeVowels('Dayane'));

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.equal(removeVowels(parameter), result);

