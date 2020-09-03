function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

describe('removing 3 of array if equal', () => {
  let myArray = [1, 2, 3, 4];

  it('remove number 3', () => {
    expect(myRemoveWithoutCopy(myArray, 3)).toEqual([ 1, 2, 4 ]);
  })

  it('testing if array is not equal to [1,2,3,4]', () => {
    expect(myRemoveWithoutCopy(myArray, 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('removing number 5 of array if equal', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })// por que quando coloco o array retorna erro?
});

