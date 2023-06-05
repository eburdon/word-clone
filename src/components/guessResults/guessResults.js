import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guessHistory, answer }) {
  const numEmptySpans = NUM_OF_GUESSES_ALLOWED - guessHistory.length
  return (
    <div className="guess-results">
      {guessHistory.map((localGuess) => {
        return <Guess key={`guess-${localGuess.id}`} value={localGuess} answer={answer}/>
      })}
      {
        range(numEmptySpans).map((num) => (<Guess key={num} value={"undefined"} />))
      }
    </div>
  );
}

export default GuessResults;
