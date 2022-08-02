// exercicio 1
function mathThingy(a, b, c) {
  // console.log('a', a);
  // console.log('b', b);
  // console.log('c', c);
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas numeros'));
    }
    const result = (a + b) * c;
    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    }
    resolve(result);
  });
  return promise;
}

// exercicio 3
async function main() {
  try {
    const result = await mathThingy(Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

main();