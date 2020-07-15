let array = [5, 8, 4, 2, 20, 18, 0, 7, 23, 15, 29, 26];
let tempo = 0;

//percorrer o array com o primeiro número
for (let i = 1; i < array.length; i += 1){
  for(let n = 0; n < array.length; n += 1){
    if (array[i] > array[n]){
      temp = array[n];
      array[n] = array [i]
      array[i] = temp;
    }

  }
}
console.log(array + " números decrescente");


// let array = [1, 5, 8, 20, 7, 3, 18]

// for (let i = 1; i < array.length; i++) {

//   for (let j = 0; j < i; j++) {
    
//       if (array[i] > array[j]) {
//         let position = array[i];
    
//         array[i] = array[j];
//         array[j] = position;
//       }
//   }   
// }

// console.log(array + ": números em ordem decrescente")