import shuffle from "../Components/Utils/shuffle";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      const questions = [];

      action.payload.map((question) => {
        let options = question.incorrect;
        options.push(question.correct);

        shuffle(options);

        questions.push({
          question: question.question,
          options: options,
          correct: question.correct,
        });

        return questions;
      });

      return { ...state, questions: questions };

    case "SET_CURRENT_QUESTION":
      return { ...state, currentQuestion: 0 };

    case "UPDATE_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case "SET_CURRENT_SCORE":
      return { ...state, currentScore: 0 };

    case "UPDATE_CURRENT_SCORE":
      return {
        ...state,
        currentScore: state.currentScore + 1,
      };

    case "SET_SCORES":
      return { ...state, scores: [] };

    case "ADD_SCORE":
      return { ...state, scores: [...state.scores, action.payload] };

    default:
      return state;
  }
};

export { GlobalReducer };
