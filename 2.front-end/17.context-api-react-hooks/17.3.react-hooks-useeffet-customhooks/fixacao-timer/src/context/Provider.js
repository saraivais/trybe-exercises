import React, { useState } from 'react';
import context from './myContext';

function Provider({ children }) {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isMultipleOfThreeOrFive, verifyIfMultiple] = useState(false);
  const [countDown, setCountDown] = useState(10);
  const INITIAL_STATE = {
    number: {
      randomNumber,
      setRandomNumber,
    },
    multiple: {
      isMultipleOfThreeOrFive,
      verifyIfMultiple,
    },
    countdown: {
      countDown,
      setCountDown,
    }
  };

  return (
    <context.Provider value={ INITIAL_STATE }>
      { children }
    </context.Provider>
  )
}

export default Provider;
