import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Admin from "layouts/Admin.js";
import Login from "views/Login/Login.js";
import Reg from "views/Login/Reg.js";
import "flexmonster/flexmonster.css";
import "assets/css/material-dashboard-react.css?v=1.8.0";
import "./views/Login/App.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className="container">
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route path="/Signup" component={Reg} />
      </Switch>

      <Switch>
        <Route path="/admin" component={Admin} />
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
