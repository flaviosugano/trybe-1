let array = [1, 5, 8, 20, 7, 3, 18]

for (let i = 1; i < array.length; i++) {

  for (let j = 0; j < i; j++) {
    
      if (array[i] < array[j]) {
        let position = array[i];
    
        array[i] = array[j];
        array[j] = position;
      }
  }   
}

console.log(array + ": números em ordem crescente")