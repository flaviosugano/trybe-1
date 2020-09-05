const exercises = require('./exercises');
jest.mock('./exercises');

describe('mock test - randomNumber (Exercise 01)', () => {

  it('has been called', () => {
    exercises.randomNumber();
    expect(exercises.randomNumber).toHaveBeenCalled();
  });

  it('should return', () => {
    exercises.randomNumber.mockReturnValue(10);
    expect(exercises.randomNumber()).toBe(10);
  });

  it('how many times has the function been called', () => {
    expect(exercises.randomNumber).toHaveBeenCalledTimes(3);
    exercises.randomNumber.mockRestore();
  })
});

describe('Implementing the function with mock (Exercise 02)', () => {

  it('implementing function to divide once', () => {
    exercises.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(exercises.randomNumber(20, 1)).toBe(20);
    expect(exercises.randomNumber).toHaveBeenCalled();
    expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercises.randomNumber).toHaveBeenCalledWith(20, 1);

    exercises.randomNumber.mockRestore();
  });
});

describe('Implementing and resenting func with mock (Exercise 03)', () => {
  exercises.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  expect(exercises.randomNumber(2, 2, 2)).toBe(8);
  
  exercises.randomNumber.mockRestore();

  exercises.randomNumber = jest.fn().mockImplementation((a) => a * a);
  expect(exercises.randomNumber(2)).toBe(4);
  expect( exercises.randomNumber).toHaveBeenCalled();
});

describe('Changing 3 funcs (Exercise 04)', () => {

  it('changing toUpperCase - making it lowerCase', () => {
    exercises.toUpper =  jest.fn().mockImplementation((str) => str.toLowerCase());
    expect(exercises.toUpper('OLA')).toBe('ola');
    expect(exercises.toUpper).toHaveBeenCalled();
    expect(exercises.toUpper).toHaveBeenCalledTimes(1);
  });

  it('changing firstLetter - showing last letter', () => {
    exercises.firstLetter = jest.fn().mockImplementation((str) => str.substr(-1));
    expect(exercises.firstLetter('ola')).toBe('a');
    expect(exercises.firstLetter).toHaveBeenCalled();
    expect(exercises.firstLetter).toHaveBeenCalledTimes(1);
  });

  it('changing concatStr - now getting 3 param', () => {
    exercises.concatStr = jest.fn().mockImplementation((a, b, c) => a + b + c);
    expect(exercises.concatStr('oi ', 'como ', 'vai?')).toBe('oi como vai?')
  });
});

describe('implementing function with spyOn (Exercise - 05)', () => {

  it('implementing toUpper', () => {
    const mockToUpper = jest.spyOn(exercises, "toUpper")
    .mockImplementation(str => str.toLowerCase());

    expect(mockToUpper('OLA')).toBe('ola');
    expect(mockToUpper).toHaveBeenCalled();
    expect(mockToUpper).toHaveBeenCalledTimes(2);
    
    // exercises.toUpper.mockRestore();
    // console.log(mockToUpper);
    // expect(exercises.toUpper("lowercase")).toBe("LOWERCASE");
  });

});