function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('sum of numbers', () => {
  it('5 plus 9 equals 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
})

test('throws an error when a string is passed', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

test('throws an error when a string is passed', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow(/parameters must be numbers/);
});




