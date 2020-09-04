// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       }

//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );

// Use como base para os exercícios a seguir:
// 1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

//   Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const findAnimal = Animals.find((animal) => animal.name === name);
      if(findAnimal){
       return resolve(findAnimal);
      }
      const msgError = 'Nenhum animal com esse nome!'
      return reject(msgError);
    }, 100)
  })
)
  
const getAnimal = (name) => {
  return findAnimalByName(name)
  .then(animal => animal);
}

// console.log(getAnimal('Dorminhoco'));

describe('Testando promise - findAnimalByName', () => {

  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

});


// 2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (age) => (
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const findObj = Animals.find((animal) => animal.age === age);
      if (findObj){
        return resolve(findObj);
      }

      const errorMsg = 'Theres no animal with this age';
      return reject(errorMsg);
    }, 100)
  })
)

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
  .then(name => name);
}

describe('Testing Promise - Find animal by age', () => {

  describe('should return object that contains the age', () => {
    it('return { name: Soneca, age: 2, type: Dog }', () => {
      return getAnimalByAge(2).then(result => {
        expect(result).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      })
    });
  });

  describe('should return error' , () => {
    it('return Theres no animal with this age', () => {
      return getAnimalByAge(10).catch(result => {
        expect(result).toEqual('Theres no animal with this age');
      })
    });
  });

})

