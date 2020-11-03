import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import Statistics from "../Components/Statistics";

export default function TriviaPage() {
  const history = useHistory();

  const {
    questions,
    currentQuestion,
    updateCurrentQuestion,
    updateCurrentScore,
    addScore,
  } = useContext(GlobalContext);

  const [nextHidden, setNextHidden] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  // updateAnswer
  const updateAnswer = (answer) => {
    setAnswered(true);
    setSelectedOption(answer);

    if (answer === questions[currentQuestion].correct) {
      updateCurrentScore();
      addScore("correct");
    } else {
      addScore("incorrect");
    }

    setNextHidden(!nextHidden);
  };

  const isCorrect = (option) => {
    return option === questions[currentQuestion].correct;
  };

  // handleNextClick
  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      updateCurrentQuestion();
      setNextHidden(!nextHidden);
      setAnswered(false);
      setSelectedOption({});
    } else {
      history.push("/results");
    }
  };

  // getOptions
  const getOptions =
    questions.length > 0
      ? questions[currentQuestion].options.map((option, index) => (
          <div
            key={index}
            className={`trivia__question-options ${
              answered && isCorrect(option) && "correct"
            }
          ${selectedOption === option && !isCorrect(option) && "incorrect"}
          `}
            onClick={() => updateAnswer(option)}
            disabled={answered && !isCorrect(option)}
          >
            <span>{answered ? (isCorrect(option) ? "✔" : "X") : "\u25A2"}</span>
            {option}
          </div>
        ))
      : "";

  // return
  return (
    <section className="trivia">
      <Statistics />

      <div className="trivia__question">
        <legend>{questions.length > 0 ? questions[currentQuestion].question : ''}</legend>
        <div>{getOptions}</div>
      </div>

      <button
        className="button"
        onClick={() => handleNextClick()}
        hidden={nextHidden}
      >
        Next Question{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}
