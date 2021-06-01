import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  quizStatus,
  statusState,
  quizNumberState,
  componentOrderState,
} from "../../../../recoil/quiz";
import BeforeQuiz from "./quiz_children/BeforeQuiz";
import CurrentQuiz from "./quiz_children/CurrentQuiz";
import QuizEnd from "./quiz_children/QuizEnd";
import { WS, API } from "../../../../config";
import "./QuizControl.scss";

function QuizControl() {
  const [quiz, setQuiz] = useRecoilState(quizStatus);
  const status = useRecoilValue(statusState);
  const quizNumber = useRecoilValue(quizNumberState);
  const componentOrder = useRecoilValue(componentOrderState);

  useEffect(() => {
    const quizControlSocket = new WebSocket(`${WS}/admin`);

    const sendData = {
      status,
      quiz_num: quizNumber,
    };
    quizControlSocket.onopen = () => {
      quizControlSocket.send(JSON.stringify(sendData));
    };
  }, [quizNumber, status]);

  useEffect(() => {
    if (status === "퀴즈시작" || "정답확인") {
      const Authorization = localStorage.getItem("token");
      fetch(`${API}/quiz/${quizNumber}`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setQuiz(res);
        });
    }
  }, [quizNumber, setQuiz, status]);

  const COMPONENT_OBJ = {
    0: <BeforeQuiz />,
    1: quiz.ans && (
      <CurrentQuiz
        qestion={quiz.quiz}
        answer={quiz.ans}
        isAnswer={quiz.is_answer}
      />
    ),
    2: <QuizEnd />,
  };

  return (
    <div className="total_data">
      <div className="realtime">실시간 현장 컨트롤</div>
      <div className="quiz_number">
        {status !== "대기" && status !== "결과확인" && (
          <div className="quiz">Quiz</div>
        )}
        {status !== "대기" && status !== "결과확인" && (
          <div className="number">{quizNumber}</div>
        )}
      </div>
      <main>{COMPONENT_OBJ[componentOrder]}</main>
    </div>
  );
}

export default QuizControl;
