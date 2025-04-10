import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "sven_svensson@gmail.com" && password === "password123") {
      onLoginSuccess();
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1 className="logo">Polyglot</h1>
      </header>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="username">Username:</label>
            <input
              className="login-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              className="login-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-btns">
            <button className="login-btn" type="submit">
              Log In
            </button>
            <button className="signup-btn">Sign up</button>
          </div>
        </form>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
