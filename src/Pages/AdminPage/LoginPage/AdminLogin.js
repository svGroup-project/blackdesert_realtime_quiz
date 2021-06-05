import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../../config";
import "./AdminLogin.scss";

const AdminLogin = () => {
  const [password, setPassword] = useState("");

  const pwInput = (e) => {
    setPassword(e.target.value);
  };

  const history = useHistory();

  const goToAdminPage = () => {
    fetch(`${API}/admin-login`, {
      method: "POST",
      body: JSON.stringify({
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res["Message"] === "Invalid_paasword") {
          alert("비밀번호가 틀렸습니다.");
        }
        if (res.token) {
          localStorage.setItem("token", res["token"]);
          history.push("/admin/main");
        }
      });
  };

  return (
    <div className="background">
      <div className="adminLogin">
        <img className="main_logo" src="/images/main_logo.png" alt="Logo" />
        <div className="page_info">관리자 전용페이지</div>
        <div className="login_box">
          <div className="password_input">
            <img src="/images/lock.png" alt="password" />
            <input onChange={pwInput} type="password" placeholder="Password" />
          </div>
          <button type="submit" onClick={goToAdminPage}>
            Login
          </button>
        </div>
        <div className="copyright">
          Copyright(C) Pearl Abyss Corp. All Rights Reserved.
        </div>
      </div>

      <footer>
        <img src="/images/bd_logo.png" alt="BlackDesert" />
      </footer>
    </div>
  );
};

export default AdminLogin;
