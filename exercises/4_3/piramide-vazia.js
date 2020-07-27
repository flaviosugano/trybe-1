let row = 4;
let column = 7;
let line = '';
// necessita uma lógica para saber o resultado correto
//da soma e subtração de linhas e colunas
for (let indexLine = 1; indexLine <= row; indexLine++){
  for (let indexColumn = 1; indexColumn <= column; indexColumn++){
      if (indexLine === row ){
        line += '*';   
      } else if (indexLine + indexColumn == 5) {
        line += '*';
      } else if (indexColumn - indexLine == 3){
        line += '*';
      } else {
        line += ' ';
      }
  }
  console.log(line);
  line = '';
}

