var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
var citricos = frutas.slice(1, 3);
console.table(citricos);

//---------------------------
const nationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))