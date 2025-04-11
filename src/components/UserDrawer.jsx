import React from "react";
import "../styles/Drawer.css";

const UserDrawer = ({ isOpen, onClose, userDetails }) => {
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
            <p>{userDetails?.email || "No email available"}</p>
          </div>
          <div className="drawer-item">
            <h4>Level</h4>
            <p>{userDetails?.level || "No level available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDrawer;
