import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../guessInput';
import GuessResults from '../guessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([])

  const addToGuessHistory = (localGuess) => {
    const newGuess = { id: localGuess, value: localGuess }
    const newHistory = guessHistory.concat([newGuess])
    console.log("newHistory", newHistory)
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} />
      <GuessInput addToGuessHistory={addToGuessHistory} />
    </>
  );
}

export default Game;
