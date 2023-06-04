import React from "react";

function GuessResults({ guessHistory }) {
  return (
    <div>
      {guessHistory.map(({ id, value }) => {
        return <p key={id}>{value}</p>
      })}
    </div>
  );
}

export default GuessResults;
