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
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const { language, platform } = location.state;

  //language에 맞는 유투브 링크 받기
  useEffect(() => {
    // 실제 api주소 : `http://localhost:8000/movie-url?language=${language}`
    fetch(`http://192.168.201.200:8000/movie-url?language=${language}`)
      .then((res) => res.json())
      .then((res) => setMovieUrl(res["movie-url"]));
  }, []);

  // console.log(movieUrl);

  useEffect(() => {
    setNickName(input);
  }, [input]);

  const socket = new WebSocket("ws://192.168.201.200:3000/");
  useEffect(() => {
    socket.onopen = () => {
      console.log("userInfo: 웹소켓 연결 OK");
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const status = data.status;
        console.log(status);
        if (status === "보상확인") {
          history.push({
            pathname: "/quiz",
            state: {
              movieUrl,
              quiz_num: data.quiz_num,
            },
          });
        }
      };
      socket.close();
      console.log("userinfo 연결종료");
    };
  }, [isClicked]);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    setIsClicked(!isClicked);
    // DB에 정보 보내면 서버에서 token 받아서 localstorage에 저장하기
    let requestBody = {
      nickname: nickName,
      language: language,
      platform: platform,
    };
    fetch("http://192.168.201.200:8000/users", {
      method: "POST",
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("Authorization", res["token"]);
        //console.log(res);
      });
  };

  // db에 유저 정보 저장하면서 ws 재오픈 및 /quiz로 경로 이동

  return (
    <div className="userInfoContainer">
      <StatusBar />
      <VideoPlayer width={"1040px"} height={"584.9px"} movieUrl={movieUrl} />
      {isClicked ? (
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
