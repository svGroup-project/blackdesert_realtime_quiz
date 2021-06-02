import React from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import ChooseAnswer from "./ChooseAnswer/ChooseAnswer";
import ConfirmAnswer from "./ConfirmAnswer/ConfirmAnswer";
import Correct from "./ConfirmAnswer/Correct/Correct";
import Wrong from "./ConfirmAnswer/Wrong/Wrong";
import EndingStatement from "./EndingStatement/EndingStatement";
import "./Quiz.scss";
import QuizReward from "./QuizReward/QuizReward";
import ShowQuiz from "./ShowQuiz/ShowQuiz";
import ShowResult from "./ShowResult/ShowResult";

const Quiz = () => {
  return (
    <div className="quiz">
      <StatusBar />
      <div className="quizContent">
        <div className="contents">
          <VideoPlayer width={"996px"} height={"560px"} />
          {/* 퀴즈 보여줌 */}
          <ShowQuiz />
          {/* 퀴즈를 마지막 문제까지 다 풀면 정답/오답 결과가 나옴 */}
          {/* <ShowResult /> */}
        </div>
        {/*quiz reward -> choose answer -> confirm answer -> show answer -> show result */}
        <div className="reward">
          <QuizReward />
          {/* <ChooseAnswer /> */}
          {/* <ConfirmAnswer /> */}
          {/* <Correct /> */}
          {/* <Wrong /> */}
          {/* <EndingStatement /> */}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
