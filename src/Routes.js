import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminLogin from "./Pages/AdminPage/AdminLogin";
import Intro from "./Pages/UserPage/Intro/Intro";
import UserInfo from "./Pages/UserPage/UserInfo/UserInfo";
import Quiz from "./Pages/UserPage/Quiz/Quiz";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AdminLogin} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/userInfo" component={UserInfo} />
        {/* <Route exact path="/quiz" component={Quiz} /> */}
        <Route exact path="/quiz/:id" component={Quiz} />
      </Switch>
    </Router>
  );
};

export default Routes;
