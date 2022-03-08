const myFizzBuzz = require('./fizzbuzz');

/* 
3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

describe('FizzBuzz function:', () => {
  
  it('Can return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Can return "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Can return "buzz"', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  it('Returns the same number if not divisible by 3 or 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it('Returns false if the parameter is not a number', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })

});