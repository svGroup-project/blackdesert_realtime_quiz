import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import AdminLogin from "./Pages/AdminPage/LoginPage/AdminLogin";
import AdminMain from "./Pages/AdminPage/MainPage/AdminMain";

const Routes = () => {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/" component={AdminLogin} />
          <Route exact path="/admin/main" component={AdminMain} />
          <Route.Redirect to="/" />
        </Switch>
      </Router>
    </RecoilRoot>
  );
};

export default Routes;
