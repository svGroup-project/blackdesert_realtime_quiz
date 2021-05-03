import React from "react";
import "./ShowResult.scss";

const ShowResult = () => {
  return (
    <div className="showResult">
      <div className="resultTitle">퀴즈결과</div>
      <div className="result">10개 문제 중,</div>
      <div className="correct">
        <span>8문제</span> 정답
      </div>
      <div className="wrong">
        <span>2문제</span> 오답
      </div>
    </div>
  );
};

export default ShowResult;
