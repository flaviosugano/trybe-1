const greetPeople = (people) => {
  let allPeople = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    allPeople.push(greeting);
  }
  return allPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
console.log(greetPeople(parameter));