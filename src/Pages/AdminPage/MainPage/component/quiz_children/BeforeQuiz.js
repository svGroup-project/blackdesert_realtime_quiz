import React, { useState } from "react";
import "../../component/QuizControl.scss";
import { intro_step } from "./intro_step";

function BeforeQuiz() {
  const [nextStep, setNextStep] = useState(0);
  const handleStep = () => {
    nextStep < 2 ? setNextStep(nextStep + 1) : setNextStep(nextStep - 1);

    if (nextStep === 0) {
      console.log("입장허용");
    }
    if (nextStep === 1) {
      console.log("보상확인");
    }
    if (nextStep === 2) {
      console.log("퀴즈시작");
    }
  };

  return (
    <section className="before_quiz">
      <img
        className="intro_img"
        src="/images/admin_page/ready.png"
        alt="BeforeQuiz"
      />
      <div className="question">{intro_step[nextStep].title}</div>
      <button onClick={handleStep} className="allow">
        {intro_step[nextStep].button}
      </button>
    </section>
  );
}

export default BeforeQuiz;
