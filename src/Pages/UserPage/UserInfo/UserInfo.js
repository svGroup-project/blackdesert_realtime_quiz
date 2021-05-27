import React, { useState, useEffect } from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import NicknameInput from "./NicknameInput/NicknameInput";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import WaitingStatement from "./WaitingStatement/WaitingStatement";
import { useLocation, useHistory } from "react-router";

import "./UserInfo.scss";

const UserInfo = () => {
  const [nickName, setNickName] = useState("");
  const [input, setInput] = useState("");
  const [movieUrl, setMovieUrl] = useState("");
  const location = useLocation();
  const history = useHistory();

  const { language, platform } = location.state;
  //const socket = new WebSocket("ws://192.168.200.104:8000/quizes");

  //language에 맞는 유투브 링크 받기
  useEffect(() => {
    // 실제 api주소 : `http://localhost:8000/movie-url?language=${language}`
    fetch(`/data/movieUrl.json`)
      .then((res) => res.json())
      .then((res) => setMovieUrl(res["movie-url"]));
  }, []);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    setNickName(input);
    // DB에 정보 보내면 서버에서 token 받아서 localstorage에 저장하기
    let requestBody = {
      nickname: nickName,
      language: language,
      platform: platform,
    };
    fetch("http://192.168.0.24:8000/users", {
      method: "POST",
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("Authorization", res["token"]);
      });

    // db에 유저 정보 저장하면서 ws 재오픈 및 /quiz로 경로 이동
    // socket.onopen = () => {
    //   console.log("userInfo: 웹소켓 재연결 OK");
    //   socket.onmessage = (event) => {
    //     if (event.status === "보상확인") {
    //       history.push({
    //         pathname: "/quiz",
    //         state: {
    //           movieUrl,
    //           quiz_num: event.quiz_num,
    //         },
    //       });
    //     }
    //   };
    // };s

    // 웹소켓을 언제 닫는지? 꼭 닫아야하는지?
    // socket.close();
  };
  console.log(
    `lang:`,
    language,
    "platform:",
    platform,
    `input:`,
    input,
    `nick:`,
    nickName
  );

  return (
    <div className="userInfoContainer">
      <StatusBar />
      <VideoPlayer width={"1040px"} height={"584.9px"} movieUrl={movieUrl} />
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
