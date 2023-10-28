import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Create from "./Create";

// It is a system that we created for the show different component to the user, based on the path of the url.
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Create} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
