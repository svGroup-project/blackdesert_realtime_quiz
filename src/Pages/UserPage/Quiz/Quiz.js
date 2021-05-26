import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import ChooseAnswer from "./ChooseAnswer/ChooseAnswer";
import ConfirmAnswer from "./ConfirmAnswer/ConfirmAnswer";
import Correct from "./Correct/Correct";
import Wrong from ".//Wrong/Wrong";
import EndingStatement from "./EndingStatement/EndingStatement";
import QuizReward from "./QuizReward/QuizReward";
import ShowQuiz from "./ShowQuiz/ShowQuiz";
import ShowResult from "./ShowResult/ShowResult";
import { useLocation } from "react-router-dom";
import "./Quiz.scss";

const Quiz = () => {
  const location = useLocation();
  const { movieUrl } = location;

  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const quizNumRef = useRef(0);

  const QuizSectionMapper = {
    보상확인: (
      <ShowQuiz status={status} quizNum={quizNumRef.current} data={data} />
    ),
    퀴즈시작: <ShowQuiz />,
    정답확인: <ShowQuiz />,
    결과발표: <ShowResult />,
  };

  const AnswerSectionMapper = {
    보상확인: <QuizReward />,
    퀴즈시작: (
      <ChooseAnswer
        checkAnswer={checkAnswer}
        fetchAnswer={fetchAnswer}
        data={data}
      />
    ),
    정답확인: <ConfirmAnswer isSuccess={isSuccess} />,
    결과발표: <EndingStatement />,
  };

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.0.23:8000/quizes");
    socket.onopen = () => {
      console.log("quiz: 웹소켓 재연결 OK");
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const status = data.status;
        switch (status) {
          case "보상확인":
            quizNumRef.current = data.quiz_num;
            setStatus("보상확인");
            break;
          case "퀴즈시작":
            quizNumRef.current = data.quiz_num;
            setStatus("퀴즈시작");
            break;
          case "정답확인":
            setStatus("정답확인");
            break;
          case "결과발표":
            setStatus("결과발표");
            break;
        }
      };
    };
  }, []);

  useEffect(() => {
    if (status === "보상확인") {
      const Authorization = localStorage.getItem("Authorization");
      fetch(`http://10.58.2.221:8000/reward/${quizNumRef.current}`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    } else if (status === "퀴즈시작") {
      const Authorization = localStorage.getItem("Authorization");
      fetch(`http://10.58.2.221:8000/quiz/${quizNumRef.current}`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } else if (status === "결과발표") {
      const Authorization = localStorage.getItem("Authorization");
      fetch(`http://10.58.2.221:8000/quiz/${quizNumRef.current}`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  }, [status]);

  // 정답 오답 여부
  const checkAnswer = (answer) => {
    // return true/false
  };

  const fetchAnswer = (answer) => {
    const Authorization = localStorage.getItem("Authorization");
    fetch(`${API}`, {
      method: "POST",
      headers: {
        Authorization: Authorization,
      },
      body: JSON.stringify({
        user: user,
        answer: answer,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (result === "success") {
          setIsSuccess(true);
        }
      });
  };

  return (
    <div className="quiz">
      <StatusBar />
      <div className="quizContent">
        <div className="topContents">
          <VideoPlayer width={"996px"} height={"100%"} movieUrl={movieUrl} />
          {QuizSectionMapper[status]}
        </div>
        <div className="bottomContents">{AnswerSectionMapper[status]}</div>
      </div>
    </div>
  );
};

export default Quiz;
