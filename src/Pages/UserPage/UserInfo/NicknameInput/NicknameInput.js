import React from "react";
import "./NicknameInput.scss";

const NicknameInput = () => {
  return (
    <div className="nickNameInput">
      <span className="nickTitle">Nickname</span>
      <input
        type="text"
        className="nickname"
        placeholder="닉네임을 입력해 주세요."
      />
      <button className="nicknameBtn">입력완료</button>
    </div>
  );
};

export default NicknameInput;
