import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  const spanArray = []

  if (value !== "undefined") {
    for (const letter of value.word) {
      spanArray.push(
        <span className="cell" key={Math.random()}>{letter}</span>
      )
    }
  } else {
    range(5).map((num) => (
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
