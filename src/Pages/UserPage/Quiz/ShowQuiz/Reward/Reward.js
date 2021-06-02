import React from "react";
import "./Reward.scss";

const Reward = ({ rate }) => {
  return (
    <div className="rewardContent">
      <span className="rewardStandard">보상지급기준</span>
      <div className="rewardStandardContents">
        참가자 중 {rate * 100}%이상 정답일 경우 보상 지급
      </div>
    </div>
  );
};

export default Reward;
