import React, { useEffect } from "react";
import "./QuizReward.scss";

const QuizReward = ({ setIsCorrectAnswer, data }) => {
  // 이전 문제에서 선택한 답이 초기화되는 과정
  useEffect(() => {
    setIsCorrectAnswer(null);
  }, []);

  return (
    <div className="quizReward">
      <div className="title">
        <span>Quiz {data.quiz_num}</span>
        <div>문제보상</div>
      </div>
      <div className="rewardContents">
        <div className="content">
          <img src={data.PC_reward_url} />
          <div>{data.PC_reward}</div>
        </div>
        <div className="content">
          <img src={data.mobile_reward_url} />
          <div>{data.mobile_reward}</div>
        </div>
      </div>
    </div>
  );
};

export default QuizReward;
