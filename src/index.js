import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { RecoilRoot } from "recoil";

import "./Styles/common.scss";
import "./Styles/reset.scss";

ReactDOM.render(
  <RecoilRoot>
    <Routes />
  </RecoilRoot>,
  document.getElementById("root")
);
