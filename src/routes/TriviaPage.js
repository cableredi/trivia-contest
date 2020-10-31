import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { STORE } from "../STORE";
import Statistics from "../Components/Statistics";

export default function TriviaPage() {
  const history = useHistory();

  const {
    currentQuestion,
    updateCurrentQuestion,
    updateCurrentScore,
    addScore,
  } = useContext(GlobalContext);

  const questions = STORE;
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

  //options
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  const options = questions[currentQuestion].incorrect;
  if (
    !options.find((option) => questions[currentQuestion].correct === option)
  ) {
    options.push(questions[currentQuestion].correct);
  }

  shuffle(options);

  // getOptions
  const getOptions = options.map((option, index) => (
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
  ));

  // return
  return (
    <section className="trivia">
      <Statistics />

      <div className="trivia__question">
        <legend>{questions[currentQuestion].question}</legend>
        <div>{getOptions}</div>
      </div>

      <button
        className="button"
        onClick={() => handleNextClick()}
        hidden={nextHidden}
      >
        Next Question
      </button>
    </section>
  );
}
