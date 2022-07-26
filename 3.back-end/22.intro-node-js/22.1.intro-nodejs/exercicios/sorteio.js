const readLine = require('readline-sync');

const randomlyGeneratedNumber = () => Math.round(Math.random() * 10);

function numberGuess() {
  const randomNumber = randomlyGeneratedNumber();
  const userTry = readLine.questionInt('Guess a number between 0 and 10: ');

  if (userTry === randomNumber) {
    console.log('Correct.\n');
  } else {
    console.log('Incorrect. The number was ', randomNumber, '\n');
  }

  const restart = readLine.question('Do you wish to play again? (y/n)\n');
  if (restart === 'y') numberGuess();
}

numberGuess();