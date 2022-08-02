/*
* Reescreva o código do exercício anterior para que utilize async/await.
*/

async function thisIsAPromise(a, b, c) {
  const result = (a + b) * c;
  if (result < 50) {
    throw new Error('Valor muito baixo');
  }
  return result;
}

async function main() {
  try {
    const parA = Math.floor(Math.random() * 100 + 1);
    const parB = Math.floor(Math.random() * 100 + 1);
    const parC = Math.floor(Math.random() * 100 + 1);
    const result = await thisIsAPromise(parA, parB, parC);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();
