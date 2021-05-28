import React, { useState } from "react";
import "../../component/QuizControl.scss";

function CurrentQuiz({
  qestion,
  answer,
  isAnswer,
  setStatus,
  setQuizNumber,
  quizNumber,
  setFirstComponent,
}) {
  const [confirmBtn, setConfirmBtn] = useState(true);

  const confirmAnswer = () => {
    setConfirmBtn(!confirmBtn);
    setStatus("정답확인");
  };

  const toNextQize = () => {
    setConfirmBtn(!confirmBtn);
    if (quizNumber < 15) {
      setStatus("보상확인");
      setQuizNumber(quizNumber + 1);
      setFirstComponent(true);
    } else {
      setStatus("결과확인");
      // Data 통계 컴포넌트로 이동
    }
  };

  const answerNum = Object.keys(answer);

  return (
    <section className="current_quiz">
      <div className="quiz">{qestion}</div>
      <ul>
        {answerNum.map((idx) => {
          return (
            <li>
              <div
                className={
                  !confirmBtn && isAnswer[idx] === "True" && "is_correct_div"
                }
              >
                {idx}
              </div>
              <span
                className={
                  !confirmBtn && isAnswer[idx] === "True" && "is_correct"
                }
              >
                {answer[idx]}
              </span>
            </li>
          );
        })}
      </ul>

      {confirmBtn ? (
        <button onClick={confirmAnswer} className="confirm">
          정답확인
        </button>
      ) : (
        <button onClick={toNextQize} className="next">
          NEXT
          <img src="/images/admin_page/arrow.png" alt="next" />
        </button>
      )}
    </section>
  );
}

export default CurrentQuiz;
