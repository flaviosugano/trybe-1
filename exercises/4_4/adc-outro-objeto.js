let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
//   if (info2 && info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
//     info.recorrente = "Ambos recorrentes";
//     info2.recorrente = " ";
// }

// for (let valor in info){
//     console.log(info[valor] + " e " + info2[valor]);
// }

console.log(info.personagem + " e " + info2.personagem)
console.log(info.origem + " e " + info2.origem)
console.log(info.nota + " e " + info2.nota)
if(info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
  console.log('Ambos recorrentes')
}