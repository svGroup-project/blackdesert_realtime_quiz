import React from "react";
import { useRecoilValue } from "recoil";
import { userAnswerState } from "../../../../../recoil/quiz";
import BarChart from "./charts/BarChart";

function QuizAnswer() {
  const userAnswer = useRecoilValue(userAnswerState);
  const quizzes = Object.keys(userAnswer).slice(0, 15);

  return (
    <div className="quiz_data">
      <div className="title_box">
        <div className="chart_title">단계별 정답/오답 인원</div>
        <div className="labels">
          <div className="label">
            <div className="one"></div>
            <span>정답</span>
          </div>
          <div className="label">
            <div className="two"></div>
            <span>오답</span>
          </div>
          <div className="label">
            <div className="three"></div>
            <span>미참여(시간초과)</span>
          </div>
        </div>
      </div>
      <div className="bar_chart">
        <div className="each_bar">
          {quizzes.map((quizNumber, idx) => (
            <BarChart key={idx} data={userAnswer[quizNumber]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizAnswer;
