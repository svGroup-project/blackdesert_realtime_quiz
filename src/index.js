import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { RecoilRoot } from "recoil";

import "./Styles/reset.scss";
import "./Styles/common.scss";

ReactDOM.render(
  <RecoilRoot>
    <Routes />
  </RecoilRoot>,
  document.getElementById("root")
);
