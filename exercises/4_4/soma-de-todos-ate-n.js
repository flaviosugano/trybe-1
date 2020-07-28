function soma(number) {
    let result = 0;
    for (let index = 1; index <= number; index++){
        result = (result + index)
    }
    return result;
}
console.log(soma(5));