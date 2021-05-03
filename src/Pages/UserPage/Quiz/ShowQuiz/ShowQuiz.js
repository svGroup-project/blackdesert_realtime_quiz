import React from "react";
import EachQuiz from "./EachQuiz/EachQuiz";
import Reward from "./Reward/Reward";
import "./ShowQuiz.scss";

const ShowQuiz = () => {
  return (
    <div className="showQuiz">
      <div className="quizAndTimer">
        <div className="quizNumber">
          <div>Quiz</div>
          <span>1</span>
        </div>
        <span className="timer">
          <span className="number">5:00</span>
        </span>
      </div>
      {/* 제일 처음 문제 보상을 보여줌 */}
      <Reward />
      {/* 문제보상 나오고 퀴즈 시작되면 퀴즈 내용으로 바뀜 */}
      {/* <EachQuiz /> */}
    </div>
  );
};

export default ShowQuiz;
