/* 
* Crie uma função que receba três parâmetros e retorna uma Promise.
* Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
* Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
* Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
* Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

*/

async function thisIsAPromise(a, b, c) {
  const result = (a + b) * c;
  if (result < 50) {
    throw new Error('Valor muito baixo');
  }
  return result;
}
