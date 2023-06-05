import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer, setGameOver }) {
  const spanArray = []

  if (value !== "undefined") {
    const guessResults = checkGuess(value.word, answer)

    const falseAnswers = guessResults.filter(result => result.status === 'incorrect')
    if (falseAnswers === 0) {
      setGameOver(true)
    }

    for (const element of guessResults) {
      spanArray.push(
        <span className={`cell ${element.status}`} key={Math.random()}>{element.letter}</span>
      )
    }
  } else {
    range(5).map(() => (
      spanArray.push(
        <span className="cell" key={Math.random()}></span>
      )))
  }

  return (
    <p className="guess" key={value.word}>
      {spanArray}
    </p>
  );
}

export default Guess;
