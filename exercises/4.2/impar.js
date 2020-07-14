let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpar = 0;

for (let i = 0; i < numbers.length; i += 1){
  if (numbers[i] % 2 != 0) {
    numImpar += 1;
  } 
}

if (numImpar > 0) {
    console.log("Tem um total de: " + numImpar + " números pares");
} else {
    console.log("Nenhum valor ímpar encontrado");
}
