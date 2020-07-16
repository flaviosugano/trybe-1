//imprimir quadrado
//com valor de n para linhas e colunar

let num = 5;

for (let coluna = 0; coluna < num; coluna += 1){
    let asterisco = '-';
    for (let linha = 0; linha < num; linha += 1){
        asterisco += ' * ';
        // console.log(asterisco);
    }
    console.log(asterisco);
}


