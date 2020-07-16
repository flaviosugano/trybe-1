let pessoa = {
    nome: "Jon",
    idade: 28,
    genero: "masculino"
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

let cores = ["Vermelho", "Azul", "Branco"];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}

let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let i in car) {
    console.log(i, car[i]);
  }