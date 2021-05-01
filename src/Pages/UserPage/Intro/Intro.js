import React from "react";
import "./Intro.scss";
import { useHistory } from "react-router";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";

const Intro = () => {
  const history = useHistory();

  const goToMain = () => {
    history.push({
      pathname: "/userInfo",
      state: {
        // state 담아서 보내기
      },
    });
  };

  return (
    <div className="introContainer">
      <div className="titleContainer">
        <div className="title">
          <img src="/images/title.png" />
        </div>
        <div className="shortTitle">
          <img src="/images/liveQuizShow.png" />
        </div>
      </div>
      <div className="LanguageContainer">
        <div className="langsTitle">Language</div>
        <div className="langs">
          <span className="imgContainer">
            <img src="/images/kr.png" />
          </span>
          <span className="imgContainer">
            <img src="/images/en.png" />
          </span>
          <span className="imgContainer">
            <img src="/images/ru.png" />
          </span>
          <span className="imgContainer">
            <img src="/images/th.png" />
          </span>
          <span className="imgContainer">
            <img src="/images/tu.png" />
          </span>
          <span className="imgContainer">
            <img src="/images/po.png" />
          </span>
          <span className="imgContainer">
            <img src="/images/ch.png" />
          </span>
          <span className="imgContainer">
            <img src="/images/jp.png" />
          </span>
        </div>
      </div>
      <div className="platformContainer">
        <div className="platformTitle">Platform</div>
        <div className="choosePlatform">
          <div className="pc">
            <img src="/images/pc.png" />
            <div className="pcTitle">PC & Console</div>
          </div>
          <div className="middleBar"></div>
          <div className="mobile">
            <img src="/images/mobile.png" />
            <div className="mobileTitle">Mobile</div>
          </div>
        </div>
      </div>
      <div className="btnContainer">
        <button onClick={goToMain} className="enterBtn">
          입장하기
        </button>
      </div>
      {/* <div className="logoContainer">
        <img src="/images/bottomLogo.png" />
      </div> */}
      <BottomLogo />
    </div>
  );
};

export default Intro;
