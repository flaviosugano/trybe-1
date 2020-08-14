// const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return array;
};

console.log(secondThirdSmallest([4, 10, 32, 9, 21, 90, 5, 11, 8, 6]));

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

// assert.deepEqual(secondThirdSmallest(parameter), result);