const assert = require('assert');
const soma = (num1, num2) => { return num1 + num2}

const result = soma(5, 7);

assert.equal(result, 12, '5 + 7 = 12');

const divisao = (num1, num2) => { return num1 / num2}
const result2 = divisao(10,5);

assert.notEqual(result2, 3, 'Dez divido por 5 é 2');

const array1 = ['sammy', 'onika', 'ivy', 'gato'];
const array2 = ['sammy', 'onika', 'ivy', 'gato', 'maya'];

assert.deepEqual(array1, array2, 'Os arrays não são iguais');