import React, { useState } from "react";
import "../styles/auth-forms.css";

const Login = ({ onLoginSuccess, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
      setErrorMessage("Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <header>
        <h1 className="logo">Polyglot</h1>
      </header>
      <div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="auth-header">Login</h2>
          <div className="auth-form-items">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="auth-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="password-container">
              <label htmlFor="password">Password:</label>
              <input
                className="auth-input"
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
            <div className="auth-btns">
              <button className="login-btn" type="submit">
                Log In
              </button>
              <button className="signup-btn" onClick={onSwitchToSignup}>
                Sign up
              </button>
            </div>
            <div className={`error ${errorMessage ? "visible" : "hidden"}`}>
              {errorMessage || " "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
