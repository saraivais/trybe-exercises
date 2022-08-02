/* 
* Escreva um código para consumir a função construída no exercício anterior.
* Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
* Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
* Utilize then e catch para manipular a Promise retornada pela função:
* Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
* Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
*/

async function thisIsAPromise(a, b, c) {
  const result = (a + b) * c;
  if (result < 50) {
    throw new Error('Valor muito baixo');
  }
  return result;
}

function main() {
  const parA = Math.floor(Math.random() * 100 + 1);
  const parB = Math.floor(Math.random() * 100 + 1);
  const parC = Math.floor(Math.random() * 100 + 1);
  thisIsAPromise(parA, parB, parC)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

main();
