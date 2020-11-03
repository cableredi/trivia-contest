import React, { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";
import { STORE } from '../STORE';

const initialState = {
  questions: {},
  currentQuestion: 0,
  currentScore: 0,
  scores: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function setQuestions() {
    dispatch({
      type: "SET_QUESTIONS",
      payload: STORE
    });
  }

  function setCurrentQuestion() {
    dispatch({
      type: "SET_CURRENT_QUESTION",
    });
  }

  function updateCurrentQuestion() {
    dispatch({
      type: "UPDATE_CURRENT_QUESTION",
    });
  }

  function setCurrentScore() {
    dispatch({
      type: "SET_CURRENT_SCORE",
    });
  }

  function updateCurrentScore() {
    dispatch({
      type: "UPDATE_CURRENT_SCORE",
    });
  }

  function setScores() {
    dispatch({
      type: "SET_SCORES",
    });
  }

  function addScore(score) {
    dispatch({
      type: "ADD_SCORE",
      payload: score,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        questions: state.questions,
        setQuestions,
        currentQuestion: state.currentQuestion,
        setCurrentQuestion,
        updateCurrentQuestion,
        currentScore: state.currentScore,
        setCurrentScore,
        updateCurrentScore,
        scores: state.scores,
        setScores,
        addScore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
