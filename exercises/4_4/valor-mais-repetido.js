function RepeatedTheMost (array) {
  let number = 0;
  let winner;
  let repeat;

    for (let index in array) {
      for (let j in array) {
          if (array[index] === array [j]){
              repeat++;
          }
      }
      if (number < repeat){
        number = repeat;
        winner = array[index];
      }
      repeat = 0;
    }
    return winner;
}
console.log(RepeatedTheMost([3, 5, 2, 5, 8, 5]));