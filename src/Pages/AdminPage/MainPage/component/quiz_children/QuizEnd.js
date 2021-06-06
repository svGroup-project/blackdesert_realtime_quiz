import React from "react";
import { useSetRecoilState } from "recoil";
import { tabIdState } from "../../../../../recoil/quiz";
import "../../component/QuizControl.scss";

function BeforeQuiz() {
  const setTabId = useSetRecoilState(tabIdState);
  const goToChart = () => {
    setTabId(0);
  };
  return (
    <section className="end">
      <div className="announce_div">
        <img src="/images/admin_page/end.png" alt="cute" />
        <div className="announce">
          <p>퀴즈가 끝났습니다.</p>
          <p>데이터 집계를 확인해주세요!</p>
        </div>
      </div>

      <button onClick={goToChart} className="dataBtn">
        데이터 집계 확인
      </button>
    </section>
  );
}

export default BeforeQuiz;
