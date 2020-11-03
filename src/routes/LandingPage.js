import React from "react";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/trivia");
  };

  return (
    <section className="landing">
      <div className="landing__text">
        Test your trivia knowledge with this Trivia Quiz!!!
      </div>

      <button className="button" onClick={() => handleOnClick()}>
        Start{" "}
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
