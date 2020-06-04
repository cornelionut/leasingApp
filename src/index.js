import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import "flexmonster/flexmonster.css";
import "assets/css/material-dashboard-react.css?v=1.8.0";
//import RTL from "layouts/RTL.js";
//import Offer from "components/Asset/edit/Offer";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      {/* <Route path="/edit" component={Products} /> */}
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
