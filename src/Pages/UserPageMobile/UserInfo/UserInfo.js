import React, { useState } from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import NicknameInput from "./NicknameInput/NicknameInput";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import WaitingStatement from "./WaitingStatement/WaitingStatement";
import { useLocation } from "react-router";

import "./UserInfo.scss";

const UserInfo = () => {
  const [nickName, setNickName] = useState("");
  const [input, setInput] = useState("");

  const location = useLocation();
  const { language, platform } = location.state;

  //   console.log(language);
  //   console.log(platform);
  //   console.log(input);
  //   console.log(nickName);

  // input state에 닉네임 input값 저장
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  // 서버에 lang, platform, nickname 전송 및 입력완료 클릭 시
  // nickname state에 저장된 input값 setting
  const onClickHandler = () => {
    fetch("api주소", {
      method: "POST",
      body: JSON.stringify({
        nickName: nickName,
        language: language,
        platform: platform,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
    setNickName(input);
  };

  return (
    <div className="userInfoContainer">
      <StatusBar />
      <VideoPlayer width={"1040px"} height={"584.9px"} />
      {/* nickname state가 없으면 nickname입력컴포넌트부터 보여주고,
      입력완료 눌렀을 때 state가 있으면  input 컴포넌트를  watingstatus 컴포넌트로 변경*/}
      {nickName ? (
        <WaitingStatement />
      ) : (
        <NicknameInput
          onClickHandler={onClickHandler}
          onChangeHandler={onChangeHandler}
        />
      )}
      <BottomLogo />
    </div>
  );
};

export default UserInfo;
