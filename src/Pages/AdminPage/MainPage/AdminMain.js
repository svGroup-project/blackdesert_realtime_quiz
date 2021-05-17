import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../MainPage/AdminMain.scss";

import DataTotal from "./component/DataTotal";
import QuizControl from "./component/QuizControl";

function AdminMain() {
  const [tabId, setTabId] = useState(0);

  const history = useHistory();

  const goToLogin = () => {
    localStorage.removeItem("token");
    history.push("/admin/login");
  };

  const tabHandler = (id) => {
    setTabId(id);
  };

  return (
    <div className="main_background">
      <div className="Menu">
        <img
          className="logo"
          src="/images/admin_page/admin_logo.png"
          alt="Logo"
        />

        <div className="menu_tab">
          <div className="tabs">
            <button
              onClick={() => tabHandler(0)}
              className={tabId === 0 ? "tab_click" : "tab_btn"}
            >
              <img
                className="mini_logo"
                src="/images/admin_page/data_chart_active.png"
                alt="Data Chart"
              />
              데이터 집계
              <img
                className="arrow"
                src="/images/admin_page/arrow.png"
                alt="arrow"
              />
            </button>

            <button
              onClick={() => tabHandler(1)}
              className={tabId === 1 ? "tab_click" : "tab_btn"}
            >
              <img
                className="mini_logo"
                src="/images/admin_page/컨트롤_active.png"
                alt="Quiz"
              />
              퀴즈 컨트롤
              <img
                className="arrow"
                src="/images/admin_page/arrow.png"
                alt="arrow"
              />
            </button>
          </div>

          <button onClick={goToLogin} className="logout_btn">
            <img src="/images/admin_page/logout.png" alt="Logout" />
            로그아웃
          </button>
        </div>
      </div>

      <main>{TAB_OBJ[tabId]}</main>
    </div>
  );
}

export default AdminMain;

const TAB_OBJ = {
  0: <DataTotal />,
  1: <QuizControl />,
};
