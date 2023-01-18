import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import Table from "./Table";
import Home from "./Home";
import { PrivateRoute } from "./PrivateRoute";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/" component={Table} />
          </Switch>
        </Router>
      </div>
    );
  }
}
