const assert = require('assert')

const sum = (...numbers) => {
  let total = 0;
  for (number of numbers){
    total += number;
  }
  console.log(total);
  return total;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)