import React from "react";
import "../styles/Settings.css";

const Settings = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className={`settings-drawer ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="settings-header">Settings</h2>
        <div className="settings-section">
          <h4>Language</h4>
          <select className="language-select">
            <option value="swedish">Swedish</option>
            <option value="spanish">Spanish</option>
            <option value="hungarian">Hungarian</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
