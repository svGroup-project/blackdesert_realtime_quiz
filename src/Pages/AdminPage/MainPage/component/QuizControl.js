import React, { useState, useEffect } from "react";
import BeforeQuiz from "./quiz_children/BeforeQuiz";
import CurrentQuiz from "./quiz_children/CurrentQuiz";
import "./QuizControl.scss";
import { WS } from "../../../../config";

function QuizControl() {
  const [quiz, setQuiz] = useState({});
  const [status, setStatus] = useState("");
  const handleStatus = () => {};
  // const [quizComponent, quizComponent] = useState(0);

  const quizControlSocket = new WebSocket(`${WS}`);

  // 버튼 클릭할 때 보내주는 status
  quizControlSocket.onopen = () => {
    quizControlSocket.send(
      JSON.stringify({
        status: status,
      })
    );
  };

  // 받는 status (컴포넌트 구별)
  // status에 따라 받는 정보 다른가? = (응) => 페이지: QuizNum, 문제: Qiuz
  quizControlSocket.onmessage = (e) => {
    console.log(JSON.parse(e.data));
    fetch("/data/quiz.json")
      .then((res) => res.json())
      .then((res) => {
        setQuiz(res);
      });
  };

  quizControlSocket.close();

  useEffect(() => {
    fetch("/data/quiz.json")
      .then((res) => res.json())
      .then((res) => {
        setQuiz(res);
      });
  }, []);

  console.log(quiz);

  return (
    <div className="total_data">
      <div className="realtime">실시간 현장 컨트롤</div>
      <div className="quiz_number">
        <div className="quiz">Quiz</div>
        <div className="number">{quiz.quiz_num}</div>
      </div>
      <main>
        {/* {!changeComponent ? (
          <BeforeQuiz />
        ) : (
          quiz.ans && ( */}
        {quiz.ans && (
          <CurrentQuiz
            qestion={quiz.quiz}
            answer={quiz.ans}
            isAnswer={quiz.is_answer}
          />
        )}
        {/* )
        )} */}
      </main>
    </div>
  );
}

export default QuizControl;

// const QUIZ_OBJ = {
//   0: <BeforeQuiz />,
//   1: <CurrentQuiz
//   qestion={quiz.quiz}
//   answer={quiz.ans}
//   isAnswer={quiz.is_answer}
// />>
// };
