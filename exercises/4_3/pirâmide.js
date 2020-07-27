// let n = 5;
// let index;
// let column;
// let line = '';

// let midOfTriangle = (n + 1) / 2;
// let leftSide = midOfTriangle;
// let rightSide= midOfTriangle;

// for (index = 0; index <= midOfTriangle; index++) {
//   for (column = 1; column <= n; column++) {
//     if (column > rightSide && column < leftSide) {
//       line += "*";
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
//   line = '';
//   rightSide--;
//   leftSide++;
// };

let base = 5;
let line = '';

let midOfTriangle = (base + 1)/2;
let rightSide = midOfTriangle;
let leftSide = midOfTriangle;

for (let index = 0; index <= midOfTriangle; index++){
  for (let column = 1; column <= base; column++){
    if (column < rightSide && column > leftSide){
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
  line = '';
  rightSide++;
  leftSide--;
}



