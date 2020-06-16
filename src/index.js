import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Redirect, Router, Route, Switch } from "react-router-dom";

import Admin from "layouts/Admin.js";
// import Main from "views/Login/Main.js";
import { Login } from "views/Login/Login.js";
import "flexmonster/flexmonster.css";
import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className="container">
      <Switch>
        <Route exact path="/Login" component={Login} />
        {/* <Route path="/Signup" component={Register} /> */}
      </Switch>

      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/Login" />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
