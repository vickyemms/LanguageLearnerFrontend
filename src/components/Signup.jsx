import React, { useState } from "react";
import "../styles/auth-forms.css";

const Signup = ({ onSignupSuccess, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [level, setLevel] = useState("A1");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,}$/;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage("Password does not meet requirements.");
      return;
    }

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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div>
      <header>
        <h1 className="logo">Polyglot</h1>
      </header>
      <div>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-header">Sign up</h2>
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
            <div className="password-container">
              <label htmlFor="password">Password:</label>
              <input
                className="login-input"
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
            <div className="password-container">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                className="login-input"
                type={isConfirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={toggleConfirmPasswordVisibility}
              >
                {isConfirmPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
            <div>
              <p className="password-requirements">
                Password must be at least 8 characters long and contain at least
                one uppercase letter, one lowercase letter, one number, and one
                special character.
              </p>
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
            <div className={`error ${errorMessage ? "visible" : "hidden"}`}>
              {errorMessage || " "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
