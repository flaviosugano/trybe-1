array = [2, 3, 6, 7, 10, 1];

function maiorValor(array) {
    result = 0;
    for(let index in array){
        // console.log(index);
        if (result < array[index]){
            result = index;
        }
    }
    return result;
}

maiorValor(array);
console.log(result);