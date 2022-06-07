import React, { useContext, useEffect } from 'react';
import generateRandomNumber from './services/generateRandomNumber';
import context from './context/myContext';

function App() {

  const {
    number: { randomNumber, setRandomNumber },
    multiple: { isMultipleOfThreeOrFive, verifyIfMultiple },
    countdown: { countDown, setCountDown },
  } = useContext(context);

  // Intervalo p/ gerar um número novo~
  useEffect(() => {
    console.log('This should be ComponentDidMount');
    const TEN_SECONDS = 10000;

    const generateNumberInterval = setInterval(() => {
      const randomlyGeneratedNumber = generateRandomNumber();
      setRandomNumber(randomlyGeneratedNumber);

      if (randomlyGeneratedNumber % 3 === 0 || randomlyGeneratedNumber % 5 === 0) {
        verifyIfMultiple(true);
      }
    }, TEN_SECONDS);

    return () => {
      clearInterval(generateNumberInterval);
    }
  }, [setRandomNumber, verifyIfMultiple]);

  // Intervalo p/ desaparecer com o acerto
  useEffect(() => {
    const FOUR_SECONDS = 4000;
    if (isMultipleOfThreeOrFive) {
      const disappearingInterval = setInterval(() => {
        verifyIfMultiple(false);
      }, FOUR_SECONDS);
    
      return () => {
        clearInterval(disappearingInterval);
      }
    }
  }, [isMultipleOfThreeOrFive, verifyIfMultiple]);

  // Intervalo do Countdown da tela~ 10 segundos
  useEffect(() => {
    const ONE_SECOND = 1000;
    const countdownInterval = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, ONE_SECOND);
    return () => {
      clearInterval(countdownInterval);
      setCountDown(10);
    }
  }, [randomNumber, setCountDown]);

  return (
    <div>
      <p>Timer! <span>{ countDown }</span></p>
      <p>O número gerado aleatoriamente é: <span>{ randomNumber }</span></p>
      { isMultipleOfThreeOrFive && <p>Acerto</p>}
    </div>
  );
}

export default App;
