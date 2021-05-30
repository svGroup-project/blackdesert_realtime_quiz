import React from "react";
import { useRecoilState } from "recoil";
import { nextStepState, statusState } from "../../../../../../src/recoil/quiz";
import { intro_step } from "./intro_step";
import "../../component/QuizControl.scss";

function BeforeQuiz({ setFirstComponent }) {
  const [nextStep, setNextStep] = useRecoilState(nextStepState);
  const [status, setStatus] = useRecoilState(statusState);

  const handleStep = () => {
    nextStep < 2 ? setNextStep(nextStep + 1) : setNextStep(nextStep - 1);

    if (nextStep === 0) {
      setStatus("입장허용");
    }
    if (nextStep === 1) {
      setStatus("보상확인");
    }
    if (nextStep === 2) {
      setStatus("퀴즈시작");
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
