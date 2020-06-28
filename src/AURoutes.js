import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AutenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute/UnauthenticatedRoute";
import Home from "./views/Home/Home";
import Admin from "./layouts/Admin";
import Dealer from "./layouts/Dealer";
import Login from "./views/Login/Login";
import Signup from "./views/Login/Signup/Signup";
import NotFound from "./views/NotFound/NotFound";
import ResetPassword from "./views/Login/ResetPassword/ResetPassword";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login/reset">
        <ResetPassword />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      {/* ADMIN */}
      <AuthenticatedRoute exact path="/admin/dashboard">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/offer">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/GetOffer">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/table">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/partners">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/reports">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/icons">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/notifications">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/user">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/settings">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/changeEmail">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/changePassword">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/rtl-page">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/admin/editOffer/assets">
        <Admin />
      </AuthenticatedRoute>
      {/* DEALER */}
      <AuthenticatedRoute exact path="/dealer/offer">
        <Dealer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dealer/editOffer/assets">
        <Dealer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dealer/GetOffer">
        <Dealer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dealer/reports">
        <Dealer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dealer/settings">
        <Dealer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dealer/changeEmail">
        <Dealer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dealer/changePassword">
        <Dealer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dealer/table">
        <Dealer />
      </AuthenticatedRoute>
      Finally, catch all unmatched routes
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
