import React from "react";
import "./Correct.scss";

const Correct = () => {
  return (
    <div className="correctAnswer">
      <div className="statement">
        <i class="far fa-circle"></i>
        <span className="highlight">정답</span> 입니다.
        <span> (정답 : 정답 1 내용)</span>
      </div>
    </div>
  );
};

export default Correct;
