import React, { useState } from "react";
import "./ChooseAnswer.scss";

const ChooseAnswer = ({ checkAnswer, fetchAnswer, data }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  return (
    <div className="chooseAnswer">
      <div className="title">
        <span>Quiz1</span>
        <div>Answer</div>
      </div>
      <div className="contents">
        {/* 정답이 2개 또는 4개인 경우로 나뉨 -
           받는 data에 따라 map돌려서 4개까지 보여주기 */}
        {/* data props 받아서 map돌리기 */}
        <div className="content">
          <span>1</span>
          <div className="answer">정답1</div>
        </div>
        <div className="content">
          <span>2</span>
          <div className="answer">정답2</div>
        </div>
        <div className="content">
          <span>3</span>
          <div className="answer">정답3</div>
        </div>
        <div className="content">
          <span>4</span>
          <div className="answer">정답4</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAnswer;
