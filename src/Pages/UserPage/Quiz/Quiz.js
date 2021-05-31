import React, { useEffect, useRef, useState } from "react";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import ChooseAnswer from "./ChooseAnswer/ChooseAnswer";
import ConfirmAnswer from "./ConfirmAnswer/ConfirmAnswer";
import EndingStatement from "./EndingStatement/EndingStatement";
import QuizReward from "./QuizReward/QuizReward";
import ShowQuiz from "./ShowQuiz/ShowQuiz";
import ShowResult from "./ShowResult/ShowResult";
import { useLocation } from "react-router-dom";
import { API } from "../../../config";
import { WS } from "../../../config";
import "./Quiz.scss";

const Quiz = () => {
  const location = useLocation();
  const { movieUrl } = location.state;

  const [data, setData] = useState([]);
  const [status, setStatus] = useState("보상확인");
  const [isSuccess, setIsSuccess] = useState(false);
  const quizNumRef = useRef(1);

  // 선택한 답변 번호 1~4
  // 정답,오답 여부 True/false/null
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  const getKeyByValue = (obj, val) => {
    return Object.keys(data.is_answer).find((key) => obj[key] === val);
  };

  const checkAnswer = (userAnswer) => {
    const keyByValue = getKeyByValue(data.is_answer, true);
    if (userAnswer === Number(keyByValue)) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  const onClickHandler = (idx) => {
    setSelectedAnswer(idx);
    checkAnswer(idx);
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
    보상확인: (
      <QuizReward
        isCorrectAnswer={isCorrectAnswer}
        setIsCorrectAnswer={setIsCorrectAnswer}
        data={data}
      />
    ),
    퀴즈시작: (
      <ChooseAnswer
        onClickHandler={onClickHandler}
        selectedAnswer={selectedAnswer}
        checkAnswer={checkAnswer}
        data={data}
      />
    ),
    정답확인: (
      <ConfirmAnswer
        isSuccess={isSuccess}
        setIsCorrectAnswer={setIsCorrectAnswer}
        isCorrectAnswer={isCorrectAnswer}
        getKeyByValue={getKeyByValue}
        data={data}
      />
    ),
    결과확인: <EndingStatement />,
  };

  useEffect(() => {
    const socket = new WebSocket(`${WS}/quizes`);
    socket.onopen = () => {
      console.log("quiz: 웹소켓 연결 OK");
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
      fetch(`${API}/reward/${quizNumRef.current}`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    } else if (status === "퀴즈시작") {
      const Authorization = localStorage.getItem("Authorization");
      fetch(`${API}/quiz/${quizNumRef.current}`, {
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
      fetch(`${API}/quiz`, {
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
            console.log(res);
            setIsSuccess(true);
          }
        });
    } else if (status === "결과확인") {
      const Authorization = localStorage.getItem("Authorization");
      fetch(`${API}/result`, {
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [status]);

  // 버튼 스타일링 초기화
  useEffect(() => {
    setSelectedAnswer(0);
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
