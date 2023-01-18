import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Axios,
  setTokenToLocalStorage,
  getTokenFromLocalStorage,
} from "../config";

export const Login = props => {
  //History obj from react router
  const history = useHistory();
  //hook email password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Redirecting if local-storage has the token
  useEffect(() => {
    if (getTokenFromLocalStorage()) {
      history.push("/");
    }
  }, []);

  //Login api submission
  const handleSubmit = event => {
    event.preventDefault();
    Axios.post("/login", { email, password })
      .then(response => {
        setTokenToLocalStorage(response.data.token);
        history.push("/");
      })
      .catch(error => {
        console.log("Error happened !");
      });
  };
  return (
    <div className="auth-container">
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
          type="email"
          placeholder="youremail@example.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          type="password"
          placeholder="enter password"
          id="password"
          name="password"
        />
        <button type="submit">Log in</button>
      </form>
      <Link to={"/register"}>
        <button className="link-btn">Create a new account</button>
      </Link>
    </div>
  );
};
