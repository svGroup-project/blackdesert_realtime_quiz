import React from "react";
import StackedBar from "./charts/StackedBar";

function Platform() {
  return (
    <div className="platform_data">
      <div className="chart_title">게임플랫폼 별 참여 인원</div>

      <div className="platform_count">
        <div className="count_all">
          <div className="top">
            <img src="/images/admin_page/total.png" alt="총인원수" />
            <span>총 참여인원</span>
          </div>
          <div className="count">1,725</div>
        </div>

        <div className="count_all pc_all">
          <div className="top">
            <img src="/images/admin_page/pc.png" alt="pc인원수" />
            <span>PC & Console</span>
          </div>
          <div className="count pc_alll">1,275</div>
        </div>

        <div className="count_all">
          <div className="top">
            <img src="/images/admin_page/mobile.png" alt="mobile인원수" />
            <span>Mobile</span>
          </div>
          <div className="count mobile_all">449</div>
        </div>
      </div>

      <div className="bar_chart">
        <StackedBar />
      </div>
    </div>
  );
}

export default Platform;
