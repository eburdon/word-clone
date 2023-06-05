import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../guessInput';
import GuessResults from '../guessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import react from 'react';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([])
  const [gameOver, setGameOver] = React.useState(false)
  const [gameWin, setGameWin] = React.useState(false)

  const addToGuessHistory = (localGuess) => {
    const newGuess = { id: Math.random(), word: localGuess }
    const newHistory = guessHistory.concat([newGuess])
    setGuessHistory(newHistory)

    if (localGuess === answer) {
      setGameOver(true)
      setGameWin(true)
    } else {
      setGameOver(newHistory.length === NUM_OF_GUESSES_ALLOWED)
    }
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} answer={answer} setGameOver={setGameOver} />
      <GuessInput addToGuessHistory={addToGuessHistory} disableInput={gameOver} />
      {gameOver && gameWin && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessHistory.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameOver && !gameWin && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
    </>
  );
}

export default Game;
