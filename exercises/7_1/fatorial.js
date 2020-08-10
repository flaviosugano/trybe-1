function fatorial(num1) {
  var result = num1;
  for (let i = 1; i < num1; i += 1){
    result = result * i;
  }
  return result; 
}
console.log(fatorial(4));
