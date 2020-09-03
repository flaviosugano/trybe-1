function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(myRemove([1, 2, 3, 4], 3));
// implemente seus testes aqui

describe('removing 3 of array if equal', () => {
  let myArray = [1, 2, 3, 4];

  it('remove number 3', () => {
    expect(myRemove(myArray, 3)).toEqual([ 1, 2, 4 ]);
  })

  it('testing if array is not equal to [1,2,3,4]', () => {
    expect(myRemove(myArray, 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('removing number 5 of array if equal', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});