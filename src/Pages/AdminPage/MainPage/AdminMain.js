import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { tabIdState, statusState } from "../../../recoil/quiz";
import { useHistory } from "react-router-dom";
import DataTotal from "./component/DataTotal";
import QuizControl from "./component/QuizControl";
import Ready from "./component/quiz_children/Ready";
import "../MainPage/AdminMain.scss";

function AdminMain() {
  const [tabId, setTabId] = useRecoilState(tabIdState);
  const status = useRecoilValue(statusState);
  const tabHandler = (id) => {
    setTabId(id);
  };

  const history = useHistory();
  const goToLoginPage = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const TAB_OBJ = {
    0: status !== "대기" ? <DataTotal /> : <Ready />,
    1: <QuizControl />,
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

          <button onClick={goToLoginPage} className="logout_btn">
            <img src="/images/admin_page/logout.png" alt="Logout" />
            로그아웃
          </button>
        </div>
      </div>

      <div>{TAB_OBJ[tabId]}</div>
    </div>
  );
}

export default AdminMain;
