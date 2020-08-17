const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

console.log([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].sort());

funcaoDeComparacao(a, b) {
  if (a > b) return -1; // aqui poderia ser qualquer numero negativo
  if (a < b) return 1; // aqui poderia ser qualquer numero positivo
  if (a == b) return 0;
} 

funcaoDeComparacao(a, b) {
  return a - b; // b - a se for decrescente
}