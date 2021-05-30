import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { tabIdState, statusState } from "../../../../../recoil/quiz";
import "../../component/QuizControl.scss";

function CurrentQuiz({
  qestion,
  answer,
  isAnswer,
  setQuizNumber,
  quizNumber,
  setFirstComponent,
}) {
  const [tabId, setTabId] = useRecoilState(tabIdState);
  const [status, setStatus] = useRecoilState(statusState);
  const [confirmBtn, setConfirmBtn] = useState(true);

  const confirmAnswer = () => {
    setConfirmBtn(!confirmBtn);
    // 이게 한단계 늦게 보내짐
    setStatus("정답확인");
  };

  const toNextQize = () => {
    setConfirmBtn(!confirmBtn);
    if (quizNumber < 15) {
      setStatus("next");
      setQuizNumber(quizNumber + 1);
      setFirstComponent(true);
    } else {
      setStatus("결과확인");
      setTabId(0);
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
              <div className={!confirmBtn && isAnswer[idx] && "is_correct_div"}>
                {idx}
              </div>
              <span className={!confirmBtn && isAnswer[idx] && "is_correct"}>
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
