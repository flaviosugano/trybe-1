let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}

let result = soma / numbers.length;

if(result > 20){
    console.log("Maior que 20"); 
} else {
    onsole.log("Menor que 20");
}