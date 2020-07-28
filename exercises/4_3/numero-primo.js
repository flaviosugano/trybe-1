let numPrimo = 4;
let primo = [];

for (index = 0; index <= numPrimo; index++){
    if (numPrimo % index == 0){
      primo.push(index);
    }
}
if (primo.length === 2){
  console.log('O número ' + numPrimo + ' é primo.')
} else {
  console.log('O número ' + numPrimo + ' não é primo.')
}