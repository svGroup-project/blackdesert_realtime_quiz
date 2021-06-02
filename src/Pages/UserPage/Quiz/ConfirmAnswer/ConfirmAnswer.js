import React from "react";
import { useEffect } from "react/cjs/react.development";
import Correct from "../Correct/Correct";
import Wrong from "../Wrong/Wrong";
import "./ConfirmAnswer.scss";

const ConfirmAnswer = ({ isSuccess, isCorrectAnswer, getKeyByValue, data }) => {
  //  response로 success를 받고 난 뒤 isCorrectAnswer를 초기화해준다

  console.log(`isSuccess: `, isSuccess, `isCorrectAnswer:`, isCorrectAnswer);
  return (
    <div className="confirmAnswer">
      <div className="checkingAnswer">
        {isSuccess && isCorrectAnswer === true && (
          <Correct data={data} getKeyByValue={getKeyByValue} />
        )}

        {isSuccess &&
          (isCorrectAnswer === null || isCorrectAnswer === false) && (
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
