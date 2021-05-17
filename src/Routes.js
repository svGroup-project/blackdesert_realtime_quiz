import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminLogin from "./Pages/AdminPage/AdminLogin";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AdminLogin} />
      </Switch>
    </Router>
  );
};

export default Routes;
