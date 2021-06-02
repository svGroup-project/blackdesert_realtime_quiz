import React from "react";
import "./EachQuiz.scss";

const EachQuiz = ({ quiz }) => {
  return (
    <div className="eachQuiz">
      <div className="quizContents">{quiz}</div>
    </div>
  );
};

export default EachQuiz;
