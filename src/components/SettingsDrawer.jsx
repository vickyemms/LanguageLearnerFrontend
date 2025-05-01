import React from "react";
import "../styles/drawer.css";
import "../styles/settings.css";

const SettingsDrawer = ({
  isOpen,
  onClose,
  onSignOut,
  sourceLang,
  targetLang,
  setSourceLang,
  setTargetLang,
}) => {
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className={`popup-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="drawer-header">Settings</h2>
        <div className="drawer-section">
          <div className="drawer-item">
            <h4>Source Language</h4>
            <select
              className="language-select"
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
            >
              <option value="en">English</option>
              <option value="sv">Swedish</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div className="drawer-item">
            <h4>Target Language</h4>
            <select
              className="language-select"
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
            >
              <option value="sv">Swedish</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div className="setting-btns-items">
            <div className="drawer-item">
              <button className="change-btns">Change e-mail</button>
            </div>
            <div className="drawer-item">
              <button className="change-btns">Change password</button>
            </div>
            <div className="drawer-item">
              <button className="delete-btn">Delete profile</button>
            </div>
          </div>
        </div>
        <div className="signout-wrapper">
          <button className="sign-out-btn" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDrawer;
