import React from "react";
import "../styles/drawer.css";
import { useTranslation } from "react-i18next";

const UserDrawer = ({ isOpen, onClose, userDetails }) => {
  const { t } = useTranslation();

  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className={`popup-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="drawer-header">{t("profile.profile")}</h2>
        <div className="drawer-section">
          <div className="drawer-item">
            <h4>{t("profile.email")}</h4>
            <p>{userDetails?.email || t("profile.noEmail")}</p>
          </div>
          <div className="drawer-item">
            <h4>{t("profile.level")}</h4>
            <p>{userDetails?.level || t("profile.noLevel")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDrawer;
