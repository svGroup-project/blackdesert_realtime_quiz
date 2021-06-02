import React from "react";
import "./Wrong.scss";

const Wrong = ({ data, getKeyByValue }) => {
  const trueAnswer = getKeyByValue(data.is_answer, true);
  return (
    <div className="wrongAnswer">
      <div className="statement">
        <i class="fas fa-times"></i>
        <span className="highlight">오답</span> 입니다.
        <span> (정답 : {data.ans[trueAnswer]})</span>
      </div>
    </div>
  );
};

export default Wrong;
