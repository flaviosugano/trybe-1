const assert = require('assert');
// escreva a função wordLengths aqui
let wordLengths = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i += 1){
    result.push(array[i].length);
  }
  // console.log(result);
  return result;
}

// console.log(wordLengths(words));

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);