import React, { useState, useEffect } from "react";
import BeforeQuiz from "./quiz_children/BeforeQuiz";
import CurrentQuiz from "./quiz_children/CurrentQuiz";
import "./QuizControl.scss";
import { WS, API } from "../../../../config";

function QuizControl({ adminTab, setAdminTab }) {
  const [quiz, setQuiz] = useState({});

  const [status, setStatus] = useState("대기");
  // console.log(`statue: ${status}`);
  const [quizNumber, setQuizNumber] = useState(1);
  // console.log(`quizNumber: ${quizNumber}`);
  const [firstComponent, setFirstComponent] = useState(true);

  const quizControlSocket = new WebSocket(`${WS}`);
  // 보내기
  useEffect(() => {
    quizControlSocket.onopen = () => {
      quizControlSocket.send(
        JSON.stringify({
          status: status,
          quiz_num: quizNumber,
        })
      );
    };

    // 받기 (=> status: 큰 컴포넌트 구별, quiz: 퀴즈 데이터)
    quizControlSocket.onmessage = (e) => {
      // console.log(JSON.parse(e.status));
      if (e.status === "입장허용" || "보상확인") {
        setFirstComponent(true);
      }
      if (e.status === "퀴즈시작" || "정답확인") {
        setFirstComponent(false);

        fetch(`${API}/quiz/${quizNumber}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setQuiz(data);
          });
      }
    };
  }, [status]);

  quizControlSocket.close();

  useEffect(() => {
    fetch("/data/quiz.json")
      .then((res) => res.json())
      .then((res) => {
        setQuiz(res);
      });
  }, []);

  // console.log(quiz);

  return (
    <div className="total_data">
      <div className="realtime">실시간 현장 컨트롤</div>
      <div className="quiz_number">
        <div className="quiz">Quiz</div>
        <div className="number">{quizNumber}</div>
      </div>
      <main>
        {firstComponent ? (
          <BeforeQuiz
            setStatus={setStatus}
            quizNumber={quizNumber}
            setQuizNumber={setQuizNumber}
            setFirstComponent={setFirstComponent}
          />
        ) : (
          quiz.ans && (
            <CurrentQuiz
              qestion={quiz.quiz}
              answer={quiz.ans}
              isAnswer={quiz.is_answer}
              setStatus={setStatus}
              quizNumber={quizNumber}
              setQuizNumber={setQuizNumber}
              firstComponent={firstComponent}
              setFirstComponent={setFirstComponent}
              adminTab={adminTab}
              setAdminTab={setAdminTab}
            />
          )
        )}
      </main>
    </div>
  );
}

export default QuizControl;

// 이 방법으로 할 필요는 없을 듯
// const COMPONET_OBJ = {
//   "beforeQiuz": <BeforeQuiz />,
//   "currentQiuz": <CurrentQuiz
//   qestion={quiz.quiz}
//   answer={quiz.ans}
//   isAnswer={quiz.is_answer}
// />>
// };
{
  /* <main>{COMPONET_OBJ[firstComponent]}</main> */
}
