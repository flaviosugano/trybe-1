let number = 5;
let result = '';
let posicaoColTotal = number;

for (i = 0; i < number; i++){
    for (let posicaoCol = 1; posicaoCol <= number; posicaoCol++){
        if (posicaoCol < posicaoColTotal){
            result += " ";
        } else {
            result += "*";
        }
    }
    console.log(result);
    result = "";
    posicaoColTotal -= 1;
}