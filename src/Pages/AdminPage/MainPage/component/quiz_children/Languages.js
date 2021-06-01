import React from "react";
import { useRecoilValue } from "recoil";
import { introDataState } from "../../../../../recoil/quiz";
import DoughnutChart from "./charts/DoughnutChart";
import "./Languages.scss";

function Languages() {
  const introData = useRecoilValue(introDataState);

  return (
    <div className="lang_data">
      <div className="chart_title">언어별 참여 인원</div>
      <div className="doughnut_chart">
        <div className="doughnut">
          <DoughnutChart />
        </div>

        <div className="lang_label">
          <div className="label_title">
            <img src="/images/admin_page/total.png" alt="total" />
            <span>총 참여인원</span>
            <span className="total">{introData.total}</span>
          </div>
          <div className="labels">
            <ul>
              <li>
                <div className="list_div">
                  <div className="color ko"></div>
                  <span>한국어</span>
                </div>
                <div className="lang_value">{introData.ko}</div>
              </li>
              <li>
                <div className="list_div">
                  <div className="color en"></div>
                  <span>영어</span>
                </div>
                <div className="lang_value">{introData.en}</div>
              </li>
              <li>
                <div className="list_div">
                  <div className="color ru"></div>
                  <span>러시아어</span>
                </div>
                <div className="lang_value">{introData.ru}</div>
              </li>
              <li>
                <div className="list_div">
                  <div className="color th"></div>
                  <span>태국어</span>
                </div>
                <div className="lang_value">{introData.th}</div>
              </li>
              <li>
                <div className="list_div">
                  <div className="color tu"></div>
                  <span>터키어</span>
                </div>
                <div className="lang_value">{introData.tu}</div>
              </li>
              <li>
                <div className="list_div">
                  <div className="color po"></div>
                  <span>포르투갈어</span>
                </div>
                <div className="lang_value">{introData.pt}</div>
              </li>
              <li>
                <div className="list_div">
                  <div className="color zh"></div>
                  <span>대만어</span>
                </div>
                <div className="lang_value">{introData.zh}</div>
              </li>
              <li>
                <div className="list_div">
                  <div className="color jp"></div>
                  <span>일본어</span>
                </div>
                <div className="lang_value">{introData.ja}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
