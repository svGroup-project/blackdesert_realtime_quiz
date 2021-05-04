import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "./QuizReward.scss";

const QuizReward = ({ id }) => {
  const [rewardData, setRewardData] = useState([]);
  // url param 값을 가져와 해당하는 문제의 보상 내용을 가져옴
  console.log(id);

  //실제 api주소 : GET `http://localhost:8000/reward/${id}`
  useEffect(() => {
    fetch("/data/quizRewardData.json")
      .then((res) => res.json())
      .then((res) => setRewardData(res.RESULT));
  }, []);

  return (
    <div className="quizReward">
      <div className="title">
        <span>Quiz {rewardData.quiz_num}</span>
        <div>문제보상</div>
      </div>
      <div className="contents">
        <div className="content">
          <img src={rewardData.PC_reward_url} />
          <div>{rewardData.PC_reward}</div>
        </div>
        <div className="content">
          <img src={rewardData.mobile_reward_url} />
          <div>{rewardData.mobile_reward}</div>
        </div>
      </div>
    </div>
  );
};

export default QuizReward;
