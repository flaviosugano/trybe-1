let xadrez = "CAVALO";

switch (xadrez.toLocaleLowerCase()){
    case "bispo":
        console.log("diagonal");
        break;
    case "torre":
        console.log("vertical/horizontal");
        break;
    case "rainha":
        console.log("todos os lados");
        break;
    case "cavalo":
        console.log("em L");
        break;
    case "peao":
        console.log("vertical");
        break;
    default:
        console.log("Erro, peça inválida");
}