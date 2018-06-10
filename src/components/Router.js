import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import SingleTrip from "./SingleTrip";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/trips/:tripId" component={SingleTrip} />
    </Switch>
  </BrowserRouter>
);

export default Router;
