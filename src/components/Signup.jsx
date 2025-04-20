import React, { useState } from "react";
import "../styles/Signup.css";

const Signup = ({ onSignupSuccess, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("A1");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      email,
      password,
      level,
    };

    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setErrorMessage(errorText || "Registration failed.");
      } else {
        const createdUser = await response.json();
        onSignupSuccess(createdUser);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("Something went wrong during sign up.");
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1 className="logo">Polyglot</h1>
      </header>
      <div className="login-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="email">Email:</label>
            <input
              className="login-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input-group">
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
          <div className="login-input-group">
            <label htmlFor="level">Level:</label>
            <select
              className="login-input"
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="login-btns">
            <button className="login-btn" type="submit">
              Sign Up
            </button>
            <button
              className="signup-btn"
              type="button"
              onClick={onSwitchToLogin}
            >
              Back to Login
            </button>
          </div>
        </form>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Signup;
