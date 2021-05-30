import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import ChooseAnswer from "./ChooseAnswer/ChooseAnswer";
import ConfirmAnswer from "./ConfirmAnswer/ConfirmAnswer";
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
  const [status, setStatus] = useState("보상확인");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const quizNumRef = useRef(1);

  const getKeyByValue = (obj, val) => {
    return Object.keys(data.is_answer).find((key) => obj[key] === val);
  };

  // 정답 오답 여부
  const checkAnswer = (userAnswer) => {
    //유저가 답을 선택하지 않으면 setIsCorrectAnswer(null)설정
    if (!userAnswer) {
      return setIsCorrectAnswer(null);
    }

    const keyByValue = getKeyByValue(data.is_answer, true);
    return userAnswer === Number(keyByValue)
      ? setIsCorrectAnswer(true)
      : setIsCorrectAnswer(false);
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
    퀴즈시작: <ChooseAnswer checkAnswer={checkAnswer} data={data} />,
    정답확인: (
      <ConfirmAnswer
        isSuccess={isSuccess}
        isCorrectAnswer={isCorrectAnswer}
        getKeyByValue={getKeyByValue}
        data={data}
      />
    ),
    결과확인: <EndingStatement />,
  };

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.201.200:3000/quizes");
    socket.onopen = () => {
      console.log("quiz: 웹소켓 연결 OK");
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const status = data.status;
        console.log(status);
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
      // 실제 api(재유님): `http://192.168.201.200:8000/reward/${quizNumRef.current}`
      fetch(`http://192.168.201.200:8000/reward/${quizNumRef.current}`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    } else if (status === "퀴즈시작") {
      const Authorization = localStorage.getItem("Authorization");
      // 실제 api: http://10.58.2.221:8000/quiz/${quizNumRef.current}
      // 실제 api(재유님):`http://192.168.201.200:8000/quiz/${quizNumRef.current}`
      fetch(`http://192.168.201.200:8000/quiz/${quizNumRef.current}`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    } else if (status === "정답확인") {
      const Authorization = localStorage.getItem("Authorization");
      fetch(`http://192.168.201.200:8000/quiz`, {
        method: "POST",
        headers: {
          Authorization: Authorization,
        },
        body: JSON.stringify({
          quiz_num: data.quiz_num,
          answer: isCorrectAnswer,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.result === "success") {
            // 정답확인중 component를 보여주다가 success를 받으면 정답/오답화면을 보여줌
            setIsSuccess(true);
            console.log(res);
          }
        });
    } else if (status === "결과확인") {
      const Authorization = localStorage.getItem("Authorization");
      // 실제 api: http://192.168.201.200:8000/result/
      fetch("http://192.168.201.200:8000/result/", {
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
