import React, { useState, useEffect } from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import { useHistory } from "react-router";
import "./Intro.scss";

const Intro = () => {
  const [language, setLanguage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [platform, setPlatform] = useState("");
  const history = useHistory();

  const socket = new WebSocket("ws://10.58.2.221:8000/users");
  socket.onopen = () => {
    console.log("intro: 웹소켓 연결 OK");
    //서버에서 "입장허용" status를 받으면 isActive false -> true하여 입장버튼 활성화
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      if (data.status === "입장허용") {
        setIsActive(!isActive);
      }
    };
  };

  // 브라우저 언어 자동 설정
  useEffect(() => {
    const getLanguage = () => {
      return navigator.language || navigator.userLanguage;
    };

    let lang = getLanguage();
    if (lang !== "") {
      lang = lang.substring(0, 2);
    }

    if (LANGUAGES.includes(lang)) {
      setLanguage(lang);
    } else {
      setLanguage("ko");
    }
  }, []);

  const onClickHandler = (device) => {
    device === "PC" ? setPlatform("PC") : setPlatform("Mobile");
  };

  const goToUserInfo = () => {
    // 버튼이 active되지 않거나 platform이 선택되지않으면 quiz로 넘어가지 않음
    if (isActive !== true || platform === "") {
      return;
    }

    const userLang = { language: language };
    socket.send(JSON.stringify(userLang));

    history.push({
      pathname: "/userInfo",
      state: {
        language,
        platform,
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
          <img src="/images/newlogo.png" />
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
              >
                <img src={`/images/${lang}.png`} alt="languageImg" />
              </span>
            );
          })}
        </div>
      </div>
      <div className="platformContainer">
        <div className="platformTitle">당신이 즐기고 있는 플랫폼은?</div>
        <div className="choosePlatform">
          <div className="pc" onClick={() => onClickHandler("PC")}>
            <img
              className="pcImg"
              src={`${
                platform === "PC" ? "/images/pc_selected.png" : "/images/pc.png"
              }`}
            />
            <div
              className={`${
                platform === "PC" ? "pcTitle selected" : "pcTitle"
              }`}
            >
              검은 사막 <br></br>PC & Console
            </div>
          </div>
          <div className="middleBar"></div>
          <div className="mobile" onClick={() => onClickHandler("Mobile")}>
            <img
              className="mobileImg"
              src={`${
                platform === "Mobile"
                  ? "/images/mobile_selected.png"
                  : "/images/mobile.png"
              }`}
            />
            <div
              className={`${
                platform === "Mobile" ? "mobileTitle selected" : "mobileTitle"
              }`}
            >
              검은 사막 <br></br>Mobile
            </div>
          </div>
        </div>
      </div>
      <div className={`btnContainer ${isActive ? "active" : ""}`}>
        <button onClick={goToUserInfo} className="enterBtn">
          입장하기
        </button>
      </div>
      <BottomLogo />
    </div>
  );
};

export default Intro;

const LANGUAGES = ["ko", "en", "ru", "th", "tu", "pt", "zh", "ja"];
