// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const resultadoTeste = (gabarito, respostas, func) => func(respostas, gabarito);

const contadorResultado = (estudante, gabarito) => {
  let counter = 0;
  for (let i = 0; i < estudante.length; i += 1) {
    if (estudante[i] === gabarito[i]) {
      counter += 1;
    }
  }
  return `O resultado é: ${(counter / estudante.length) * 100}%`;
}

let teste1 = [1, 2, 3, 4, 5];
let teste2 = [1, 2, 3, 4, 6];

console.log(resultadoTeste(teste1, teste2, contadorResultado));