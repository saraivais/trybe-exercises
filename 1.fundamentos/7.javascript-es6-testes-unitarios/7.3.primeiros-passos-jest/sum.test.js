const sum = require('./sum');

/*
1 - A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

describe('Sum function:', () => {

  it('Adds two positive integers', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Adds 0 to 0 and receives 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Adds only numbers', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  });
  
});