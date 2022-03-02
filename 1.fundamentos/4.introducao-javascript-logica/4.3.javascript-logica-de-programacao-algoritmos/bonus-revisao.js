// 1 - Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

function printSquare(number) {
  for (let i = 0; i < number; i += 1) {
    console.log('*'.repeat(number));
  }
}

// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

function printLeftSideTriangle(number) {
  for (let i = 1; i <= number; i += 1) {
    console.log('*'.repeat(i));
  }
}

// 3 - Agora inverta o lado do triângulo.

function printRighSideTriangle(number) {
  for (let i = 1; i <= number; i += 1) {
    console.log(' '.repeat(number-i) + '*'.repeat(i));
  }
}

// 4 - Depois, faça uma pirâmide com n asteriscos de base.

function printXBaseTriangle(number) {
  for (let i = 1; i <= number; i += 2) {
    const sides = (number - i)/2;
    console.log(' '.repeat(sides) + '*'.repeat(i) + ' '.repeat(sides));
  }
}

// 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.

function printTrianglePerimeter(number) {
  for (let i = 1; i <= number; i += 2) {
    const sides = (number - i)/2;
    const middle = i - 2;
    if (i === 1) {
      console.log(' '.repeat(sides) + '*' + ' '.repeat(sides));
    } else if (i !== number && i !== (number-1)) {
      console.log(' '.repeat(sides) + '*' + ' '.repeat(middle) + '*' + ' '.repeat(sides));
    } else {
      console.log('*'.repeat(i));
    }
  }
}

// 6 - Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

function isPrime(number) {
  let counter = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  if (counter === 2) {
    console.log(`${number} é um número primo`);
  } else if (counter > 2) {
    console.log(`${number} não é um número primo`);
  }
}

isPrime(3);
isPrime(2);
isPrime(6);
isPrime(7);
isPrime(17);
isPrime(47);
isPrime(42);
isPrime(187);
isPrime(743);
isPrime(817);