import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "./QuizReward.scss";

const QuizReward = ({ data }) => {
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
