import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "../config";

// props for toggle page
export const Register = props => {
  //hook name email password
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    Axios.post("/register", { name, email, password })
      .then(response => {
        setMessage("User registered successfully");
      })
      .catch(error => {
        console.log("Error happened !");
      });
  };
  return (
    <div className="auth-container">
      {message && <p className="success-alert">{message}</p>}
      <h2>Register</h2>

      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          id="name"
          placeholder="your full name"
          name="name"
        />
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
      <Link to={"/login"}>
        <button className="link-btn">Have an account. Login Here</button>
      </Link>
    </div>
  );
};
