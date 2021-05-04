import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import ChooseAnswer from "./ChooseAnswer/ChooseAnswer";
import ConfirmAnswer from "./ConfirmAnswer/ConfirmAnswer";
import Correct from "./ConfirmAnswer/Correct/Correct";
import Wrong from "./ConfirmAnswer/Wrong/Wrong";
import EndingStatement from "./EndingStatement/EndingStatement";
import QuizReward from "./QuizReward/QuizReward";
import ShowQuiz from "./ShowQuiz/ShowQuiz";
import ShowResult from "./ShowResult/ShowResult";
import { useParams, useLocation } from "react-router-dom";
import "./Quiz.scss";

const Quiz = () => {
  const params = useParams();
  const location = useLocation();

  // url param 값을 가져와 해당하는 문제의 보상 내용을 가져옴
  const { id } = params;
  const { movieUrl } = location;
  const [quizNum, setQuizNum] = useState(null);
  const [quizData, setQuizData] = useState([]);
  console.log(`movieUrl:`, movieUrl, `, id:`, id);

  // const socket = new WebSocket("ws://192.168.0.23:8000/users");
  // socket.onopen = () => {
  //   console.log("quiz: 웹소켓 재연결 OK");
  //   socket.onmessage = (event) => {
  //     if (event.status === "퀴즈시작") {
  //       setQuizNum(event.quiz_num);
  //     }
  //   };

  return (
    <div className="quiz">
      <StatusBar />
      <div className="quizContent">
        <div className="contents">
          <VideoPlayer width={"996px"} height={"570px"} movieUrl={movieUrl} />
          <ShowQuiz quizNum={quizNum} />
          {/* <ShowResult /> */}
        </div>
        {/*quiz reward -> choose answer -> confirm answer -> show answer -> show result */}
        <div className="reward">
          {/* 보상확인 */}
          <QuizReward id={id} />
          {/* 퀴즈 */}
          {/* <ChooseAnswer /> */}
          {/* <ConfirmAnswer /> */}
          {/* <Correct /> */}
          {/* <Wrong /> */}
          {/* 결과화면 */}
          {/* <EndingStatement /> */}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
