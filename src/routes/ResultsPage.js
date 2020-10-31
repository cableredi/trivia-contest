import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { STORE } from "../STORE";

export default function ResultsPage() {
  const history = useHistory();

  const {
    currentScore,
    setCurrentQuestion,
    setCurrentScore,
    setScores,
  } = useContext(GlobalContext);

  const getResults = () => {
    let message = "";
    let highScore = Math.floor(STORE.length * 0.9);
    let midScore = Math.floor(STORE.length * 0.7);

    if (currentScore >= highScore) {
      message = "AWESOME! You are a Trivia Master!";
    } else if (currentScore >= midScore) {
      message = "Great! You sure know your trivia!";
    } else {
      message = "You need to practice up on your trivia!";
    }

    return message;
  };

  const handlePlayAgain = () => {
    setCurrentQuestion();
    setCurrentScore();
    setScores([]);
    history.push("./trivia");
  };

  return (
    <section className="results">
      <div className="results__scores">
        <div className="results__correct">{currentScore} Correct</div>
        <div>{getResults()}</div>
      </div>
      <button className="button" onClick={() => handlePlayAgain()}>
        Play Again
      </button>
    </section>
  );
}
