import React from "react";
import Correct from "../Correct/Correct";
import Wrong from "../Wrong/Wrong";
import "./ConfirmAnswer.scss";

const ConfirmAnswer = ({ isSuccess, isCorrectAnswer, getKeyByValue, data }) => {
  return (
    <div className="confirmAnswer">
      <div className="checkingAnswer">
        {isSuccess && isCorrectAnswer ? (
          <Correct data={data} getKeyByValue={getKeyByValue} />
        ) : (
          <Wrong data={data} getKeyByValue={getKeyByValue} />
        )}
        {!isSuccess && (
          <>
            <i className="fas fa-hourglass-half"></i>
            정답을 <span>확인</span> 하는 중입니다.
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmAnswer;
