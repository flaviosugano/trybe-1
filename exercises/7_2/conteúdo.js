const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// console.log(customer1);

customer1.lastName = 'Faria';
// console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

// console.log(customer2);
customer2['lastName'] = 'Silva';
// console.log(customer2);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);


const pessoa = {
  nome: 'Alessandra',
  idade: 24,
}

var addKey = (obj, key, value) => {
  obj[key] = value;
  console.log(obj);
}

addKey(pessoa, 'marido', 'Jonathan');

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

let showAbbility = (student) => { 
  const list = Object.keys(student);
  
  for(i in list){
    console.log(`${list[i]}, Nível: ${student[list[i]]}`);
  }
}
showAbbility(student1);

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  child: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }
  clone.name = 'Maria';

  console.log('Mudando a propriedade name através do objeto clone')
  console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
  console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
  console.log('--------------');
  
  person.lastName = 'Ferreira';
  
  console.log('Mudando a propriedade lastName através do objeto person');
  console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
  console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }
