const exercises = require('./exercises');
jest.mock('./exercises');

describe('mock test - randomNumber', () => {

  it('has been called', () => {
    exercises.randomNumber();
    expect(exercises.randomNumber).toHaveBeenCalled();
  })

  it('should return', () => {
    exercises.randomNumber.mockReturnValue(10);
    expect(exercises.randomNumber()).toBe(10);
  })

  it('how many times has the function been called', () => {
    exercises.randomNumber();
    expect(exercises.randomNumber).toHaveBeenCalledTimes(3);
  })
})
