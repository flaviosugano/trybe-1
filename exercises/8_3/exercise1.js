    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
    const join = arrays.reduce((acc, number) => acc.concat(number));
    return join;
}

// console.log(flatten());

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);