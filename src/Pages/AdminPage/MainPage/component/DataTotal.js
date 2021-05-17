import React, { useEffect, useState } from "react";
import "./DataTotal.scss";
import Languages from "./quiz_children/Languages";
import Platform from "./quiz_children/Platform";
import QuizAnswer from "./quiz_children/QuizAnswer";

function DataTotal() {
  const [userAnswer, setUserAnswer] = useState({});
  // console.log(Object.keys(userAnswer));
  const [introData, setIntroData] = useState({});
  // const userAnswer = Object.keys(userAnswer).slice(0,15);
  // const quizAnswer = Object.keys(userAnswer).slice(0, 15);
  const userPlatform = Object.keys(userAnswer).slice(15);

  // Mock data 활용
  useEffect(() => {
    fetch("/data/chart.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const introData = res.user;
        const answerData = res;

        setUserAnswer(answerData);
        setIntroData(introData);
      });
  }, []);

  // 실전: WebSocket
  // useEffect(() => {
  //   const socketPath = "ws://192.168.0.24:3000";
  //   const getUserData = new WebSocket(socketPath);

  //   getUserData.onopen = () => {
  //     getUserData.send(
  //       JSON.stringify({
  //         password: "안보내도 되는데 그냥 보내봄",
  //       })
  //     );
  //   };

  //   getUserData.onmessage = (answer) => {
  //     // 접근 방법 같은지 확인해보고 다르면 수정
  //     console.log("1");
  //     console.log(JSON.parse(answer.data));

  //     const introData = answer.user;
  //     const answerData = answer;

  //     setUserAnswer(answerData);
  //     setIntroData(introData);
  //   };
  // }, []);

  return (
    <div className="TotalData">
      <div className="intro_data">
        <Languages introData={introData} />
        <Platform userPlatform={userPlatform} />
      </div>
      <QuizAnswer userAnswer={userAnswer} />
    </div>
  );
}

export default DataTotal;
