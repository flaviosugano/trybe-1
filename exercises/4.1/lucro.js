let custo = 20;
let venda = 30;
let lucro = 0;

if (custo == 0 || venda == 0){
    console.log("Erro, valor inválido")
} else {
    lucro = (venda - custo) * 1000;
}

console.log(lucro)


