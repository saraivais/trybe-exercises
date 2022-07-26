const readLine = require('readline-sync');

function getFatorial(number) {
  if (number === 1) {
    return 1;
  }
  if (number > 0) {
    return (number * getFatorial(number - 1));
  }
  return 'invalid number, mate';
}

function fatorial() {
  const chosenNumber = readLine.questionInt('Type in a number: ');
  console.log(getFatorial(chosenNumber));
}

module.exports = fatorial;