import React from "react";
import "./ConfirmAnswer.scss";

const ConfirmAnswer = () => {
  return (
    <div className="confirmAnswer">
      <div className="checkingAnswer">
        <i className="fas fa-hourglass-half"></i>
        정답을 <span>확인</span> 하는 중입니다.
      </div>
    </div>
  );
};

export default ConfirmAnswer;
