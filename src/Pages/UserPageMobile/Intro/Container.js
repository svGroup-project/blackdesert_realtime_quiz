import React, { useState, useEffect } from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { useHistory } from "react-router";
import "./Intro.scss";
import Intro from "./Intro";
import MobileIntro from "./MobileIntro";

const Container = () => {
  const history = useHistory();
  const [language, setLanguage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    if (isBrowser) {
      setPlatform("PC");
    } else {
      setPlatform("Mobile");
    }
  }, []);

  const onClickHandler = (id) => {
    setIsClicked(!isClicked);
    setLanguage(LANGUAGES[id]);
  };

  console.log(language, platform);

  const goToQuiz = () => {
    if (language === "") {
      alert("Please choose your language before start.");
    } else {
      history.push({
        pathname: "/userInfo",
        state: {
          language,
          platform,
        },
      });
    }
  };

  isBrowser ? (
    <Intro
      language={language}
      onClickHandler={onClickHandler}
      goToQuiz={goToQuiz}
    />
  ) : (
    <MobileIntro
      language={language}
      onClickHandler={onClickHandler}
      goToQuiz={goToQuiz}
    />
  );
};

export default Container;

const LANGUAGES = ["ko", "en", "ru", "th", "tu", "po", "ch", "jp"];
