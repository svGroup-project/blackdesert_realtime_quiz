import React from "react";
import "./Wrong.scss";

const Wrong = () => {
  return (
    <div className="wrongAnswer">
      <div className="statement">
        <i class="fas fa-times"></i>
        <span className="highlight">오답</span> 입니다.
        <span> (정답 : 정답 1 내용)</span>
      </div>
    </div>
  );
};

export default Wrong;
