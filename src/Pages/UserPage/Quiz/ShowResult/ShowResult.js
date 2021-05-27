import React from "react";
import "./ShowResult.scss";

const ShowResult = ({ data }) => {
  console.log(data);
  return (
    <div className="showResult">
      <div className="resultTitle">퀴즈결과</div>
      <div className="result">15개 문제 중,</div>
      <div className="correct">
        <span>{data.correct}문제</span> 정답
      </div>
      <div className="wrong">
        <span>{data.wrong}문제</span> 오답
      </div>
    </div>
  );
};

export default ShowResult;
