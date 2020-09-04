const math = require('./math');
const { somar, dividir } = require('./math');
jest.mock("./math");

test('subtrair', () => {
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
})

test('multiplicar', () => {
  math.multiplicar.mockReturnValue(10);

  expect(math.multiplicar).toHaveBeenCalledTimes(0);
  expect(math.multiplicar(2, 5)).toBe(10)
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
})

test('somar', () => {
  math.somar.mockImplementation((a, b) => a + b);
  expect(math.somar).toHaveBeenCalledTimes(0);
  somar(1, 3);
  expect(math.somar).toHaveBeenCalledWith(1, 3);
})

test('dividir', () => {
  math.dividir.mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);
  
  expect(math.dividir).toHaveBeenCalledTimes(0);

  math.dividir(1, 2)
  expect(math.dividir).toHaveBeenCalledWith(1, 2);

  // expect(math.dividir()).toBe(2)
  expect(math.dividir()).toBe(5)
  expect(math.dividir()).toBe(15)

});

//Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('testing subtrair to be restored', () => {
  const mockSub = jest.spyOn(math, "subtrair");
  mockSub.mockReturnValue(20);

  expect(mockSub).toHaveBeenCalled();
  expect(mockSub()).toBe(20);

  mockSub.mockRestore();
  expect(mockSub).not.toHaveBeenCalled();
})





