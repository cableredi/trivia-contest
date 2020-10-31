import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalContext";
import Header from "./Components/Header";
import LandingPage from "./routes/LandingPage";
import TriviaPage from "./routes/TriviaPage";
import ResultsPage from "./routes/ResultsPage";

export default function App() {
  const { setCurrentQuestion, setCurrentScore, setScores } = useContext(
    GlobalContext
  );

  useEffect(() => {
    setCurrentScore();
    setCurrentQuestion();
    setScores();
  }, []);

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/trivia" component={TriviaPage} />
        <Route exact path="/results" component={ResultsPage} />
      </Switch>
    </main>
  );
}
