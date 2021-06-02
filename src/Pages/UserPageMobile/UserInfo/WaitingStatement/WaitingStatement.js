import React from "react";
import "./WaitingStatement.scss";

const WaitingStatement = () => {
  return (
    // 선택한 언어에 따라서 다른 문구 보여줌?
    <div className="waitingStatement">
      <div>곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요.</div>
    </div>
  );
};

export default WaitingStatement;
