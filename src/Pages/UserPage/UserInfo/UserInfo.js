import React, { useState, useEffect } from "react";
import BottomLogo from "../../../Components/BottomLogo/BottomLogo";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import NicknameInput from "./NicknameInput/NicknameInput";
import StatusBar from "../../../Components/StatusBar/StatusBar";
import WaitingStatement from "./WaitingStatement/WaitingStatement";
import { useLocation, useHistory } from "react-router";
import { API } from "../../../config";
import { WS } from "../../../config";
import "./UserInfo.scss";

const UserInfo = () => {
  const [nickname, setNickname] = useState("");
  const [input, setInput] = useState("");
  const [movieUrl, setMovieUrl] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation();
  const history = useHistory();

  const { language, platform } = location.state;

  //language에 맞는 유투브 링크 받기
  useEffect(() => {
    fetch(`${API}/movie-url?language=${language}`)
      .then((res) => res.json())
      .then((res) => setMovieUrl(res["movie-url"]));
  }, []);

  // input값 update사항 있을 때마다 setNickName setState
  useEffect(() => {
    setNickname(input);
  }, [input]);

  // WS로 보상확인 메세지를 받으면 QUIZ 페이지로 넘어가면서 state값을 넘겨줌
  useEffect(() => {
    // db에 유저 정보 저장하면서 ws 재오픈 및 /quiz로 경로 이동
    const socket = new WebSocket(`${WS}/quizes`);
    socket.onopen = () => {
      console.log("userInfo: 웹소켓 연결 OK");
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const status = data.status;
        if (status === "보상확인") {
          history.push({
            pathname: "/quiz",
            state: {
              movieUrl,
            },
          });
        }
        socket.close();
      };
    };
  }, [isClicked]);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    setIsClicked(!isClicked);
    let requestBody = {
      nickname,
      language,
      platform,
    };
    fetch(`${API}/users`, {
      method: "POST",
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("Authorization", res["token"]);
      });
  };

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
