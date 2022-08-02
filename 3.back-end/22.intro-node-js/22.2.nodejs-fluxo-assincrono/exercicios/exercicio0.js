/*
-
Demonstração das diferenças e semelhanças práticas entre usar callbacks e Promises no fluxo assíncrono~
Em Promises, diferença entre then/catch & async/await quando mais de um resultado assíncrono é esperado.
Utiliza exercícios 1, 2 e 3.
Obrigada, @Guilherme Augusto, pessoa instrutora da Trybe~
-
*/

// Usando callbacks p/ fluxo async~ callback hell
function mathThingy(a, b, c, callback) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return callback('erro 1~', null);
    }
    const result = (a + b) * c;
    if (result < 50) {
      return callback('erro 2~', null);
    }
  return callback(null, result);
}

function main() {
  mathThingy(
    Math.random() * 100 + 1,
    Math.random() * 100 + 1,
    Math.random() * 100 + 1,
    (erro, valor) => {
      if (erro !== null) {
        console.log(erro);
      } else {
        mathThingy(
          Math.random() * 100 + 1,
          Math.random() * 100 + 1,
          Math.random() * 100 + 1,
          (erro1, valor1) => {
            if (erro1 !== null) {
              console.log(erro1);
            } else {
              mathThingy(
                Math.random() * 100 + 1,
                Math.random() * 100 + 1,
                Math.random() * 100 + 1,
                (erro2, valor2) => {
                  if (erro2 !== null) {
                    console.log(erro2);
                  } else {
                    console.log('valor2', valor2);
                    console.log('resultado desse inferno', valor + valor1 + valor2);
                  }
                });
              console.log('valor1', valor1);
            }
          });
        console.log('valor', valor);
      }
    });
    console.log('feijão');
}
main();

// Usando promise e then/catch~ Then hell? Talvez
function mathThingy(a, b, c) {
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

function main() {

  mathThingy(Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1)
    .then((result) =>
      mathThingy(Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1)
        .then((result1) =>
          mathThingy(Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1)
            .then((result2) => console.log('socorro deus', result + result1 + result2))
    ))
    .catch((err) => console.log(err));
  console.log('feijão~');
}

main();

// Usando promise e async/await~ now this is perfection
function mathThingy(a, b, c) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
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

async function main() {
  try {
    const result = await mathThingy(Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1);
    const result1 = await mathThingy(Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1);
    const result2 = await mathThingy(Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1);
    console.log(result + result1 + result2);
  } catch (err) {
    console.log(err);
  }
}

main();