import React from "react";
import EachQuiz from "./EachQuiz/EachQuiz";
import Reward from "./Reward/Reward";
import "./ShowQuiz.scss";

const ShowQuiz = ({ quizNum }) => {
  return (
    <div className="showQuiz">
      <div className="quizAndTimer">
        <div className="quizNumber">
          <div>Quiz</div>
          <span>{quizNum}</span>
        </div>
        {/*타이머 작동시키기*/}
        <span className="timer">
          <span className="number">5:00</span>
        </span>
      </div>
      {quizNum ? <EachQuiz /> : <Reward />}
    </div>
  );
};

export default ShowQuiz;
