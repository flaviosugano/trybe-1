const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo
const filterPeople = () => {
  let result = [];
  for (person of people){
    let {bornIn, nationality} = person;    
    if (bornIn > 1900 && bornIn < 2000 && nationality === 'Australian'){
      result.push(person);
    }
  }
  return result;
}

//GABARITO
// const age = birthYear => birthYear > 1900 && birthYear < 2001;
// const country = from => from === 'Australian';

// const filterPeople = people => people.filter(({bornIn, nationality}) => 
//   age(bornIn) && country(nationality)
// )

console.log(filterPeople(people));

const filteredPeople = filterPeople(people)

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })