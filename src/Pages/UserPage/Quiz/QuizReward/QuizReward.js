import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "./QuizReward.scss";

const QuizReward = () => {
  const [rewardData, setRewardData] = useState([]);

  useEffect(() => {
    fetch("/data/quizRewardData.json")
      .then((res) => res.json())
      .then((res) => setRewardData(res.RESULT));
  }, []);

  return (
    <div className="quizReward">
      <div className="title">
        <span>Quiz1</span>
        <div>문제보상</div>
      </div>
      <div className="contents">
        <div className="content">
          <img src={rewardData.console_img} />
          <div>Black Desert & Balck desert Console : 발크스의 조언</div>
        </div>
        <div className="content">
          <img src={rewardData.mobile_img} />
          <div>Balck desert Mobile: 돌파복구권</div>
        </div>
      </div>
    </div>
  );
};

export default QuizReward;
