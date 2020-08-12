const func1 = phrase => {
  const newString = 'Tryber x aqui';
  var resultado = newString.replace('x', phrase);

  return resultado;
}
// console.log(func1('bebeto'));

let softSkills = ['paciência', 'empatia', 'gentileza'];
const func2 = (text) => {
  var inOrder = softSkills.sort(); // recebe as soft skills em ordem alfabética
  
  let newString = `${text}
  Minhas 5 habilidades são:` // concatena o resultado da função 1 e o texto
  
  // percorre a lista com os itens ordenados
  for (let i = 0; i < inOrder.length; i += 1){
    newString += `
    ${inOrder[i]}`; // dá-se espaço para poder ficar um embaixo do outro
  }
  return newString;
}
console.log(func2(func1('Ale')));
