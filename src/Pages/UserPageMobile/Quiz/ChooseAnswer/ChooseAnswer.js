import React from "react";
import "./ChooseAnswer.scss";

const ChooseAnswer = () => {
  return (
    <div className="chooseAnswer">
      <div className="title">
        <span>Quiz1</span>
        <div>Answer</div>
      </div>
      <div className="chooseAnswerContents">
        {/* 정답이 2개 또는 4개인 경우로 나뉨 -
           받는 data에 따라 map돌려서 4개까지 보여주기 */}
        <div className="answerList">
          <span>1</span>
          <div className="answer">정답1</div>
        </div>
        <div className="answerList">
          <span>2</span>
          <div className="answer">정답2</div>
        </div>
        <div className="answerList">
          <span>3</span>
          <div className="answer">정답3</div>
        </div>
        <div className="answerList">
          <span>4</span>
          <div className="answer">정답4</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAnswer;
