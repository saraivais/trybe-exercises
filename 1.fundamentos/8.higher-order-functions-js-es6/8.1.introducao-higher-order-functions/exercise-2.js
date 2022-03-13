// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultadoSorteio = (array, numeroEscolhido) => {
  const numerosSorteados = array;
  if (numerosSorteados.includes(numeroEscolhido)) {
    return 'Parabéns você ganhou';
  } 
  return 'Tente novamente';
};

const sorteio = () => Math.round(Math.random (1-5) + 1);

console.log(resultadoSorteio([1, 2, 3, 4, 5], sorteio()));