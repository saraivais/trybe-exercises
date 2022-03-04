const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}. Ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } 
  else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else).';
    console.log(elseScope);
  }
}

testingScope(true);
testingScope(false);

/*
Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada. OK
Modifique a estrutura da função para que ela seja uma arrow function. OK
Modifique as concatenações para template literals. OK
*/

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortMyNumbers = () => {
  const oddsAndEvens = [];
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}

console.log(sortMyNumbers()); // será necessário alterar essa linha 😉

let oddsAndEvensArray = [13, 3, 4, 10, 7, 2];

const sortByMethod = (array) => array.sort((a, b) => a - b); //  (a, b) => a - b dentro do sort
//sort precisa receber função como parâmetro~ receber callback que vai ser executada e virar o retorno do sort~ 

console.log(sortByMethod(oddsAndEvensArray));

/* 
Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/