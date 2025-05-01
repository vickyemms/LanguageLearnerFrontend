import React from "react";
import "../styles/drawer.css";
import "../styles/settings.css";
import { useTranslation } from "react-i18next";

const SettingsDrawer = ({
  isOpen,
  onClose,
  onSignOut,
  sourceLang,
  targetLang,
  setSourceLang,
  setTargetLang,
}) => {
  const { i18n, t } = useTranslation();

  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className={`popup-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="drawer-header">{t("settings.settings")}</h2>
        <div className="drawer-section">
          <div className="drawer-item">
            <h4>{t("settings.sourceLanguage")}</h4>
            <select
              className="language-select"
              value={sourceLang}
              onChange={(e) => {
                setSourceLang(e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="sv">Swedish</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div className="drawer-item">
            <h4>{t("settings.targetLanguage")}</h4>
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
              <button className="change-btns">
                {t("settings.changeEmail")}
              </button>
            </div>
            <div className="drawer-item">
              <button className="change-btns">
                {t("settings.changePassword")}
              </button>
            </div>
            <div className="drawer-item">
              <button className="delete-btn">
                {t("settings.deleteProfile")}
              </button>
            </div>
          </div>
        </div>
        <div className="signout-wrapper">
          <button className="sign-out-btn" onClick={onSignOut}>
            {t("settings.signOut")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDrawer;
