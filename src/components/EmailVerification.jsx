import React, { useEffect, useState } from "react";
import "../styles/email-verification.css";

const EmailVerification = ({ onSwitchToLogin }) => {
  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      verifyToken(token);
    } else {
      setStatus("error");
      setMessage("Invalid verification link.");
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch(
        `http://localhost:8080/users/verify-email?token=${token}`
      );
      const text = await response.text();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Your email has been successfully verified. You can now log in."
        );
      } else {
        setStatus("error");
        setMessage(text || "Verification failed.");
      }
    } catch (err) {
      console.error("Verification error:", err);
      setStatus("error");
      setMessage("Something went wrong during verification.");
    }
  };

  return (
    <div>
      <header>
        <h1 className="logo">Polyglot</h1>
      </header>
      <div className="verification-container">
        <h1 className="verification-header">Email Verification</h1>
        <p className="verification-message">{message}</p>
        {(status === "success" || status === "error") && (
          <button className="go-to-login-btn" onClick={onSwitchToLogin}>
            Go to Login
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
