function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


// implemente seus testes aqui
describe('testing fizzBuzz function', () => {
  it('testing if 30 can be divided by 3 and 5', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });

  it('testing if 9 is divided by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })

  it('testing if 10 is divided by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })

  it('testing if 7 is divided by 3 abd 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })

  it('testing if NAN returns false', () => {
    expect(myFizzBuzz('ola')).toBe(false);
  })
})