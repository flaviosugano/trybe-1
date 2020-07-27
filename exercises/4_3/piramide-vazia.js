let base = 7;
let line = '';

let midOfTriangle = (base + 1)/ 2;
let leftSide = midOfTriangle;
let rightSide = midOfTriangle;

for (let index = 0; index <= midOfTriangle; index++){
  for (let column = 1; column <= base; column++){
      if (column > rightSide && column < leftSide){
        line += '*';   
      } else {
        line += ' ';
      }
  }
  console.log(line);
  line = '';
  rightSide--;
  leftSide++;
}