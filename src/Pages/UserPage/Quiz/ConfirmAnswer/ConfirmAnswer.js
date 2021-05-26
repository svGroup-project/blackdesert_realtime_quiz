import React from "react";
import "./ConfirmAnswer.scss";

const ConfirmAnswer = ({ isSuccess }) => {
  return (
    <div className="confirmAnswer">
      <div className="checkingAnswer">
        <i className="fas fa-hourglass-half"></i>
        {/* {isSuccess ? 정답or오답: 정답확인중 } */}
        정답을 <span>확인</span> 하는 중입니다.
      </div>
    </div>
  );
};

export default ConfirmAnswer;
