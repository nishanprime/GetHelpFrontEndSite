import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:email">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
