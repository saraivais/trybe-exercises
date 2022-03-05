// Crie uma função que receba um número e retorne seu fatorial.

function factorial(number) {
  if (number >= 1) {
    return number * factorial(number-1);
  } else {
    return 1;
  }
}

console.log(factorial(5));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
  
const factorialArrow = (number) => number >= 1 ? number*factorialArrow(number-1) : 1;

console.log(factorialArrow(5));

// 5 -> 5 * fatorial(4) ------> 4 -> 4*fatorial(3) ------> 3 -> 3*fatorial(2) ------> 2 -> 2*fatorial(1) -----> 1 -> 1*fatorial(0) -------> 1*1

// Crie uma função que receba uma frase e retorne qual a maior palavra.
function returnBiggerWord(string) {
  return string.split(' ').sort()[0];
}

const biggerWord = (string) => string.split(' ').sort()[0];

/*

Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"

Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe".
*/