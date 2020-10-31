import React from "react";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/trivia");
  };

  return (
    <section className="landing">      
      <div className="landing__text">Test your trivia knowledge!!!</div>

      <button className="button" onClick={() => handleOnClick()}>
        Start
      </button>
    </section>
  );
}
