import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userAnswerState, introDataState } from "../../../../recoil/quiz";
import Languages from "./quiz_children/Languages";
import Platform from "./quiz_children/Platform";
import QuizAnswer from "./quiz_children/QuizAnswer";
import { API } from "../../../../config";
import "./DataTotal.scss";

function DataTotal() {
  const setUserAnswer = useSetRecoilState(userAnswerState);
  const setIntroData = useSetRecoilState(introDataState);

  useEffect(() => {
    fetch(`${API}/chart`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const introData = res.user;
        const answerData = res;

        setUserAnswer(answerData);
        setIntroData(introData);
      });
  }, [setUserAnswer, setIntroData]);

  return (
    <div className="TotalData">
      <div className="intro_data">
        <Languages />
        <Platform />
      </div>
      <QuizAnswer />
    </div>
  );
}

export default DataTotal;
