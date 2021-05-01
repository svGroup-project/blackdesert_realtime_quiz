import React from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import NicknameInput from "./NicknameInput/NicknameInput";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import "./UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="userInfoContainer">
      <StatusBar />
      <VideoPlayer />
      {/* nicknameinput이 없으면 nickname입력컴포넌트,
      입력완료 누르면 컴포넌트를  watingstatus 컴포넌트로 변경*/}
      <NicknameInput />
      <BottomLogo />
    </div>
  );
};

export default UserInfo;
