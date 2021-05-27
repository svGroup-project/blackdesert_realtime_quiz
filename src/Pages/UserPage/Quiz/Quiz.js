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
  const [status, setStatus] = useState("퀴즈시작");
  const [isSuccess, setIsSuccess] = useState(false);
  const quizNumRef = useRef(1);

  // 정답 오답 여부
  const checkAnswer = (answer) => {
    // 유저가 고른 index가 is_answer에서 value가 true인 key와 동일하다면
    // return true or false
    // if(answer === Object.values(data.is_answer))
  };

  const fetchAnswer = (answer) => {
    // const Authorization = localStorage.getItem("Authorization");
    // fetch(`${API}`, {
    //   method: "POST",
    //   headers: {
    //     Authorization: Authorization,
    //   },
    //   body: JSON.stringify({
    //     //   user: user,
    //     //   answer: answer,
    //     // }),
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (result === "success") {
    //       setIsSuccess(true);
    //     }
    //   });
  };
  const QuizSectionMapper = {
    보상확인: (
      <ShowQuiz status={status} quizNum={quizNumRef.current} data={data} />
    ),
    퀴즈시작: (
      <ShowQuiz status={status} quizNum={quizNumRef.current} data={data} />
    ),
    정답확인: (
      <ShowQuiz status={status} quizNum={quizNumRef.current} data={data} />
    ),
    결과확인: <ShowResult data={data} />,
  };

  const AnswerSectionMapper = {
    보상확인: <QuizReward data={data} />,
    퀴즈시작: (
      <ChooseAnswer
        checkAnswer={checkAnswer}
        fetchAnswer={fetchAnswer}
        data={data}
      />
    ),
    정답확인: <ConfirmAnswer isSuccess={isSuccess} data={data} />,
    결과확인: <EndingStatement />,
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
          case "결과확인":
            setStatus("결과확인");
            break;
        }
      };
    };
  }, []);

  useEffect(() => {
    if (status === "보상확인") {
      const Authorization = localStorage.getItem("Authorization");
      // 실제 api: http://10.58.2.221:8000/reward/${quizNumRef.current}
      fetch("/data/quizRewardData.json", {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    } else if (status === "퀴즈시작") {
      const Authorization = localStorage.getItem("Authorization");
      // 실제 api: http://10.58.2.221:8000/quiz/${quizNumRef.current}
      fetch("/data/quizData.json", {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    } else if (status === "결과확인") {
      const Authorization = localStorage.getItem("Authorization");
      // 실제 api: http://10.58.2.221:8000/result/
      fetch("/data/quizResult.json", {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [status]);

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
