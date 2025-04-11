import React from "react";
import "../styles/Drawer.css";
import "../styles/Settings.css";

const SettingsDrawer = ({ isOpen, onClose }) => {
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
            <select className="language-select">
              <option value="english">English</option>
              <option value="swedish">Swedish</option>
              <option value="spanish">Spanish</option>
              <option value="hungarian">Hungarian</option>
            </select>
          </div>
          <div className="drawer-item">
            <h4>Target Language</h4>
            <select className="language-select">
              <option value="swedish">Swedish</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="hungarian">Hungarian</option>
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
          <button className="sign-out-btn">Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDrawer;
