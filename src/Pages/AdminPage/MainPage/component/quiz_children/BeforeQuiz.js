import React, { useState } from "react";
import "../../component/QuizControl.scss";
import { intro_step } from "./intro_step";

function BeforeQuiz({
  setStatus,
  setQuizNumber,
  quizNumber,
  setFirstComponent,
}) {
  const [nextStep, setNextStep] = useState(0);

  const handleStep = () => {
    nextStep < 2 ? setNextStep(nextStep + 1) : setNextStep(1);
    const netxQuiz = intro_step[0].id;
    console.log(netxQuiz);
    if (nextStep === 0) {
      setStatus("입장허용");
    }
    if (nextStep === 1) {
      setStatus("보상확인");
    }
    if (nextStep === 2) {
      setStatus("퀴즈시작");
      setQuizNumber(quizNumber);
      setNextStep(1);
      setFirstComponent(false);
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
