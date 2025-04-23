import React, { useState } from "react";
import "../styles/auth-forms.css";

const Signup = ({ onSignupSuccess, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const level = "A1";
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"',.<>?/\\|]).{8,}$/;

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

        if (response.status === 409 || errorText.includes("Email already")) {
          setErrorMessage("This email is already registered.");
        } else {
          setErrorMessage(errorText || "Registration failed.");
        }
      } else {
        const createdUser = await response.json();
        setIsSubmitted(true);
        setErrorMessage("");
        //onSignupSuccess(createdUser);
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

  const handleResendVerification = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "http://localhost:8080/resend-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const message = await response.text();

      if (!response.ok) {
        if (message.includes("already been sent") || response.status === 429) {
          setSuccessMessage("");
          setErrorMessage(
            "A verification email has already been sent. Please wait a few minutes before trying again."
          );
        } else {
          setSuccessMessage("");
          setErrorMessage(message || "Failed to resend verification email.");
        }
      } else {
        setErrorMessage("");
        setSuccessMessage(
          "Verification email resent successfully. Please check your inbox."
        );
      }
    } catch (error) {
      console.error("Resend error:", error);
      setSuccessMessage("");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <header>
        <h1 className="logo" onClick={onSwitchToLogin}>
          Polyglot
        </h1>
      </header>
      {!isSubmitted ? (
        <div>
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2 className="auth-header">Sign up</h2>
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
              <div className="password-container">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  className="auth-input"
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
                  Password must be at least 8 characters long and contain at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character.
                </p>
              </div>
              <div className="auth-btns">
                <button className="register-btn" type="submit">
                  Sign Up
                </button>
                <button
                  className="back-to-login-btn"
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
      ) : (
        <div className="confirmation-message-container">
          <h2>Thanks for signing up!</h2>
          <p className="confirmation-message">
            We've sent a confirmation link to <strong>{email}</strong>. Before
            you can log in, please check your inbox and follow the instructions
            to verify your email address. If you don’t see it, check your spam
            or junk folder.
          </p>
          <button
            className="resend-verification-btn"
            onClick={handleResendVerification}
          >
            Resend
          </button>
          <div className="message-container">
            <div className={`error ${errorMessage ? "visible" : "hidden"}`}>
              {errorMessage || " "}
            </div>
            <div className={`success ${successMessage ? "visible" : "hidden"}`}>
              {successMessage || " "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
