const readLine = require('readline-sync');

const fibonacciNumberByPosition = (position) => {
  if (position === 0) return 0;
  if (position === 1) return 1;
  if (position > 1) return fibonacciNumberByPosition(position - 2) + fibonacciNumberByPosition(position - 1);
};

const getFibonacciSequence = (numberOfFibonacci) => {
  const fibonacciSequence = [];
  for (let i = 0; i < numberOfFibonacci; i += 1) {
    fibonacciSequence.push(fibonacciNumberByPosition(i));
  }
  return fibonacciSequence;
};

const chosenNumber = readLine.questionInt('Type the amount of fibonacci numbers you want: ');

console.log(...getFibonacciSequence(chosenNumber));

// falta condicionais e geri geris~ \/

// const teste = (n) => {
//   const fiboStart = [0, 1];
//   if (n > 2) {
//     for (let i = 0; i < n; i += 1) {
//       fiboStart.push(fiboStart[fiboStart.length - 2] + fiboStart[fiboStart.length - 1]);
//     }
//   }
//   return fiboStart;
// }
// console.log(teste(10));