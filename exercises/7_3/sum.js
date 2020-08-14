const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// let total = sum(4,5);

// implemente seus testes aqui
assert.equal(sum(4,5), 9);
assert.equal(sum(0,0), 0);
assert(function(){sum(4,"5")},/parameters must be numbers/); // relacionado ao throw new Errow();


