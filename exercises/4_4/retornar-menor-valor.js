array = [2, 4, 6, 7, 10, 0, -3];

function menorValor(array) {
    result = 0;
    for(let index in array){
        // console.log(index);
        if (result > array[index]){
            result = index;
        }
    }
    return result;
}

menorValor(array);
console.log(result);