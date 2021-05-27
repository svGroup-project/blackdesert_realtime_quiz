import React from "react";
import "./Correct.scss";

const Correct = ({ data, getKeyByValue }) => {
  const trueAnswer = getKeyByValue(data.is_answer, true);
  return (
    <div className="correctAnswer">
      <div className="statement">
        <i class="far fa-circle"></i>
        <span className="highlight">정답</span> 입니다.
        <span> (정답 : {data.ans[trueAnswer]})</span>
      </div>
    </div>
  );
};

export default Correct;
