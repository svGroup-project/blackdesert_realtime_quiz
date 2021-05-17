import React, { useState } from "react";
import "../../component/QuizControl.scss";

function CurrentQuiz({ qestion, answer, isAnswer }) {
  const [confirmBtn, setConfirmBtn] = useState(true);

  const confirmAnswer = () => {
    setConfirmBtn(!confirmBtn);
  };

  const toNextQize = () => {
    setConfirmBtn(!confirmBtn);
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
