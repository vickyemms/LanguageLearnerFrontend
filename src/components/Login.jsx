import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ onLoginSuccess, onSwitchToSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginRequest = {
      email: username,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Invalid credentials");
      } else {
        const user = await response.json();
        onLoginSuccess(user);
      }
    } catch (error) {
      console.error("Error during login:", error);
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
            <label htmlFor="username">Email:</label>
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
            <button className="signup-btn" onClick={onSwitchToSignup}>
              Sign up
            </button>
          </div>
        </form>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
