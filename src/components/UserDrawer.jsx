import React from "react";
import "../styles/Drawer.css";

const UserDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className={`popup-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="drawer-header">Profile</h2>
        <div className="drawer-section">
          <div className="drawer-item">
            <h4>E-mail</h4>
            <p>sven_svensson@gmail.com</p>
          </div>
          <div className="drawer-item">
            <h4>Level</h4>
            <p>A1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDrawer;
