import { useState } from "react";
import questions from "../data/questions";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">

      {showResult ? (
        <div>
          <h2>Quiz Completed!</h2>

          <h3>
            Your Score: {score} / {questions.length}
          </h3>

          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <h2>{questions[current].question}</h2>

          <div className="options">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOption(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <p>
            Question {current + 1} of {questions.length}
          </p>
        </div>
      )}

    </div>
  );
}

export default Quiz;