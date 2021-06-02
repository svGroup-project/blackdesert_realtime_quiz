import React from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import "./MobileIntro.scss";

const MobileIntro = () => {
  const { language, onClickHandler, goToQuiz } = this.props;
  return (
    <div className="introContainer">
      <div className="titleContainer">
        <div className="title">
          <img src="/images/title.png" />
        </div>
        <div className="shortTitle">
          <img src="/images/그룹 5697.png" />
        </div>
      </div>
      <div className="languageContainer">
        <div className="langsTitle">Language</div>
        <div className="langs">
          {LANGUAGES.map((lang, idx) => {
            return (
              <span
                className={
                  language === LANGUAGES[idx]
                    ? "imgContainer selected"
                    : "imgContainer"
                }
                key={idx}
                onClick={() => onClickHandler(idx)}
              >
                <img src={`/images/${lang}.png`} />
              </span>
            );
          })}
        </div>
      </div>
      <div className="platformContainer">
        <div className="platformTitle">당신이 즐기고 있는 플랫폼은?</div>
        <div className="choosePlatform">
          {isBrowser ? (
            <>
              <div className="pc">
                <img className="pcImg" src="/images/pc_selected.png" />
                <div className="pcTitle selected">
                  검은 사막 <br></br>PC & Console
                </div>
              </div>
              <div className="middleBar"></div>
              <div className="mobile">
                <img className="mobileImg" src="/images/mobile.png" />
                <div className="mobileTitle">
                  검은 사막 <br></br>Mobile
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="pc">
                <img className="pc" src="/images/pc.png" />
                <div className="pcTitle">
                  검은 사막 <br></br>PC & Console
                </div>
              </div>
              <div className="middleBar"></div>
              <div className="mobile ">
                <img className="mobileImg" src="/images/mobile_selected.png" />
                <div className="mobileTitle selected">
                  검은 사막 <br></br>Mobile
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="btnContainer">
        <button onClick={goToQuiz} className="enterBtn">
          입장하기
        </button>
      </div>
      <BottomLogo />
    </div>
  );
};

export default MobileIntro;

const LANGUAGES = ["kr", "en", "ru", "th", "tu", "po", "ch", "jp"];
