import React, { useState } from "react";
import "./ChooseAnswer.scss";

const ChooseAnswer = ({ checkAnswer, data }) => {
  const [isSelected, setIsSelected] = useState(false);

  // const onClickHandler = (idx) => {
  //   const trueOrFalse = checkAnswer(idx);
  //   if (trueOrFalse === true) {
  //     // 유저가 선택한 답이 정답이면 fetchAnswer에 해당 문제번호와 true를 보내고
  //     fetchAnswer(data.quiz_num, true);
  //   } else {
  //     // 유저가 선택한 답이 오답이면 fetchAnswer에 해당 문제번호와 false를 보냄
  //     fetchAnswer(data.quiz_num, false);
  //   }
  // };

  const onClickHandler = (idx) => {
    checkAnswer(idx);
    setIsSelected(!isSelected);
  };
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
                key={idx}
                className={`${isSelected ? "content selected" : "content"}`}
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
