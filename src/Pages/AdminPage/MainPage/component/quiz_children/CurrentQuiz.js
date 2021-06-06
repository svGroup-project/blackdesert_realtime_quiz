import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  confirmBtnState,
  quizNumberState,
  statusState,
  componentOrderState,
} from "../../../../../recoil/quiz";
import "../../component/QuizControl.scss";

function CurrentQuiz({ qestion, answer, isAnswer }) {
  const [confirmBtn, setConfirmBtn] = useRecoilState(confirmBtnState);
  const [quizNumber, setQuizNumber] = useRecoilState(quizNumberState);
  const setStatus = useSetRecoilState(statusState);
  const setComponentOrder = useSetRecoilState(componentOrderState);

  const confirmAnswer = () => {
    setConfirmBtn(!confirmBtn);
    setStatus("정답확인");
  };

  const toNextQize = () => {
    setConfirmBtn(!confirmBtn);
    if (quizNumber < 15) {
      setStatus("next");
      setQuizNumber(quizNumber + 1);
      setComponentOrder(0);
    } else {
      setStatus("결과확인");
      setComponentOrder(2);
    }
  };

  const answerNum = Object.keys(answer);

  return (
    <section className="current_quiz">
      <div className="quiz">{qestion}</div>
      <ul>
        {answerNum.map((idx, id) => {
          return (
            <li key={id}>
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
