import React, { useState } from "react";
import "../styles/auth-forms.css";

const Login = ({ onLoginSuccess, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginRequest = {
      email: email,
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
    <div>
      <header>
        <h1 className="logo">Polyglot</h1>
      </header>
      <div>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-header">Login</h2>
          <div className="login-form-items">
            <div>
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
            <div>
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
            {errorMessage && <div className="error">{errorMessage}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
