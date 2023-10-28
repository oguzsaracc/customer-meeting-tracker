import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

// It is a system that we created for the show different component to the user, based on the path of the url.
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
