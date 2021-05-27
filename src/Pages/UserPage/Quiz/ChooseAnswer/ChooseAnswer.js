import React, { useState } from "react";
import "./ChooseAnswer.scss";

const ChooseAnswer = ({ checkAnswer, fetchAnswer, data }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();
  console.log(data.ans);
  return (
    <div className="chooseAnswer">
      <div className="title">
        <span>Quiz {data.quiz_num}</span>
        <div>Answer</div>
      </div>
      <div className="contents">
        {data.ans &&
          Object.entries(data.ans).map(([key, value], idx) => {
            return (
              <div className="content" onClick={() => checkAnswer(idx + 1)}>
                <span>{key}</span>
                <div className="answer">{value}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseAnswer;
