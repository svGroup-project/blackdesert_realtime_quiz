import React from "react";
import "../../component/quiz_children/Ready.scss";

function Ready() {
  return (
    <section className="TotalData">
      <div className="announce_div">
        <img src="/images/admin_page/end.png" alt="cute" />
        <div className="announce">
          <p>퀴즈를 시작하지 않아 집계를 낼 수 없습니다.</p>
          <p>입장을 허용해 주세요. </p>
        </div>
      </div>
    </section>
  );
}

export default Ready;
