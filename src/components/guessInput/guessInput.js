import React from "react";

function GuessInput({ addToGuessHistory, disableInput }) {
  const [localGuess, setLocalGuess] = React.useState('');

  const handleLocalGuess = (letter) => {
    setLocalGuess(letter)
  }

  const handleLocalSubmit = () => {
    console.log("Local Submit", { localGuess })

    if (localGuess.length !== 5) {
      window.alert("Please use exactly 5 letters")
      return
    }

    addToGuessHistory(localGuess)
    setLocalGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleLocalSubmit();
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disableInput}
        id="guess-input"
        type="text"
        value={localGuess}
        maxLength={5}
        minLength={5}
        onChange={(event) => {
          event.preventDefault();
          handleLocalGuess(event.target.value.toUpperCase())
        }}
      />
    </form >);
}

export default GuessInput;
