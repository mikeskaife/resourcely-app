import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";

export default (
  <Switch>
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);
