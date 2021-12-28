import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {PrivateRoute} from "middleware/privateRouter";

import "assets/scss/material-kit-react.scss?v=1.10.0";
require("dotenv").config();
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegistrationPage from "views/LoginPage/RegistrationPage.js"
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Co" component={Components}/>
      <PrivateRoute path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegistrationPage} />
      <PrivateRoute path="/" component={LandingPage}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
