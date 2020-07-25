let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let newNumber = 0;
let n = 0; //tive que declarar n fora porque todas as vezes que iniciava o let, reiniciava o valor de n e fazia todas as multiplicações novamente.

for (let i = 1; i <= numbers.length; i++){
    for (n; n < i; n++) {
        if (n === numbers.length -1){
          newNumber = (numbers[n] * 2);
          newArray.push(newNumber);
        } else {
          newNumber = (numbers[n] * numbers[i]);
          newArray.push(newNumber);
        }
    }   
}
console.log(newArray);

