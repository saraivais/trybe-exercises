const {encode, decode, stringToArray, arrayToString} = require('./encode-decode');

/* 
4 - Para as funções encode e decode crie os seguintes testes em Jest:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/

describe('Encode and decode functions:', () => {

  it('Changes letters to numbers', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Changes numbers to letters:', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Does not change consonants:', () => {
    expect(encode('hello world')).toBe('h2ll4 w4rld');
    expect(decode('h2ll4 w4rld')).toBe('hello world');
  });

  it('Returns a string with the same length as the argument string:', () => {
    expect(encode('hello friend').length).toBe(12);
    expect(encode('h2ll4 fr32nd').length).toBe(12);
  });

});

