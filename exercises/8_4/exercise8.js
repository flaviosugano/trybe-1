const assert = require('assert')
const { measureMemory } = require('vm')

// escreva greet abaixo
const greet = (name = "you", message = "Hi") => `${message} ${name}`;



assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")