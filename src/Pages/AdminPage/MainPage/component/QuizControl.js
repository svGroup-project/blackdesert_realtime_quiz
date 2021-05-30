import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { statusState } from "../../../../recoil/quiz";
import BeforeQuiz from "./quiz_children/BeforeQuiz";
import CurrentQuiz from "./quiz_children/CurrentQuiz";
import { WS, API } from "../../../../config";
import "./QuizControl.scss";

function QuizControl() {
  const [quiz, setQuiz] = useState({});
  const [status, setStatus] = useRecoilState(statusState);
  const [quizNumber, setQuizNumber] = useState(1);
  const [firstComponent, setFirstComponent] = useState(true);
  console.log(status);

  // 연결
  const quizControlSocket = new WebSocket(`${WS}`);

  quizControlSocket.onopen = () => {
    quizControlSocket.send(
      JSON.stringify({
        status: status,
        quiz_num: quizNumber,
      })
    );
  };

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
  }, [status, quizNumber]);

  // MockData
  // useEffect(() => {
  //   fetch("/data/quiz.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setQuiz(res);
  //     });
  // }, []);

  // console.log(quiz.is_answer);
  return (
    <div className="total_data">
      <div className="realtime">실시간 현장 컨트롤</div>
      <div className="quiz_number">
        {status !== "대기" && <div className="quiz">Quiz</div>}
        {status !== "대기" && <div className="number">{quizNumber}</div>}
      </div>
      <main>
        {firstComponent ? (
          <BeforeQuiz setFirstComponent={setFirstComponent} />
        ) : (
          quiz.ans && (
            <CurrentQuiz
              qestion={quiz.quiz}
              answer={quiz.ans}
              isAnswer={quiz.is_answer}
              quizNumber={quizNumber}
              setQuizNumber={setQuizNumber}
              firstComponent={firstComponent}
              setFirstComponent={setFirstComponent}
            />
          )
        )}
      </main>
    </div>
  );
}

export default QuizControl;
