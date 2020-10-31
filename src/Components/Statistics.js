import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { STORE } from "../STORE";

export default function Statistics() {
  const { currentScore, currentQuestion, scores } = useContext(GlobalContext);

  return (
    <div className="statistics">
      <div className="statistics__question">
        <strong>Question: </strong>
        {currentQuestion} / {STORE.length}
      </div>
      <div className="statistics__score">
        <strong>Score: </strong>
        {currentScore} / {STORE.length}
      </div>
    </div>
  );
}
