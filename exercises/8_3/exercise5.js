    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


// PRIMEIRA VERSÃO

// function containsA(name) {
//   var total = 0;
//   for (let i = 0; i < name.length; i += 1){
//     let teste = name[i].split('');
//     for (let j = 0; j < teste.length; j += 1){
//       if (teste[j].toLowerCase() === 'a'){
//         total += 1;
//       }
//     }
//   }
//   return total;
// }



function containsA() {

  const total = names.reduce((acc, name, index) => {
    let result = name.split('');
    var tot = 0;
    let indice = result.map((teste, index) => result[index].toLowerCase() === 'a' ? tot += 1 : 0);
    return acc + tot;
  }, 0)
  return total;
}
// console.log(containsA())
assert.deepEqual(containsA(names), 20);

// GABARITO
// function containsA() {
//   return names.reduce((acc, curr)=> 
//      acc + curr.split('').reduce((acumulator, current) => {
//         if(current === 'a'|| current === 'A') return acumulador + 1;
//         return acumulador;
//      }, 0),0);
// }