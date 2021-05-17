import React from "react";
import DoughnutChart from "./charts/DoughnutChart";

function Languages() {
  return (
    <div className="lang_data">
      <div className="chart_title">언어별 참여 인원</div>
      <div className="doughnut_chart">
        <div className="doughnut">
          <DoughnutChart />
        </div>

        {/* 여기 style 적용이 안됨 */}
        <div classNam="lang_label">
          <div className="label_title">
            <img src="/images/admin_page/total.png" alt="total" />
            <span>총 참여인원</span>
          </div>
          <div className="labels">
            <ul>
              <li>
                <div className="color"></div>한국어
                <div className="lang_value"></div>
              </li>
              <li>
                <div className="color"></div>영어
                <div className="lang_value"></div>
              </li>
              <li>
                <div className="color"></div>러시아어
                <div className="lang_value"></div>
              </li>
              <li>
                <div className="color"></div>태국어
                <div className="lang_value"></div>
              </li>
              <li>
                <div className="color"></div>터키어
                <div className="lang_value"></div>
              </li>
              <li>
                <div className="color"></div>포르투갈어
                <div className="lang_value"></div>
              </li>
              <li>
                <div className="color"></div>대만어
                <div className="lang_value"></div>
              </li>
              <li>
                <div className="color"></div>일본어
                <div className="lang_value"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
