import React from "react";
import { getTokenFromLocalStorage } from "../config";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
  const token = getTokenFromLocalStorage();
  return !!token;
};

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}
