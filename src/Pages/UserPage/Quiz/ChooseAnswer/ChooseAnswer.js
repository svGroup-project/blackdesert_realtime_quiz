import React from "react";
import "./ChooseAnswer.scss";

const ChooseAnswer = ({ selectedAnswer, onClickHandler, data }) => {
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
              <div
                id="answer"
                key={idx}
                className={`${
                  idx + 1 === selectedAnswer ? "content selected" : "content"
                }`}
                onClick={() => onClickHandler(idx + 1)}
              >
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
