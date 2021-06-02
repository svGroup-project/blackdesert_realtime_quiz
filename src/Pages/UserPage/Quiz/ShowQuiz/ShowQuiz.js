import React from "react";
import EachQuiz from "./EachQuiz/EachQuiz";
import Reward from "./Reward/Reward";
import "./ShowQuiz.scss";

const ShowQuiz = ({ status, quizNum, data }) => {
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
      {status === "보상확인" ? (
        <Reward rate={data.reward_rate} />
      ) : (
        <EachQuiz quiz={data.quiz} />
      )}
    </div>
  );
};

export default ShowQuiz;
