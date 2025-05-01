import React from "react";
import { useTranslation } from "react-i18next";
import { FaCog, FaUser } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = ({
  selectedItem,
  onNavClick,
  onUserDrawerClick,
  onSettingsDrawerClick,
}) => {
  const { t } = useTranslation();

  return (
    <header>
      <h1 className="logo">Polyglot</h1>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li
            className={`nav-item ${selectedItem === "nouns" ? "active" : ""}`}
            onClick={() => onNavClick("nouns")}
          >
            {t("nav.nouns")}
          </li>
          <li
            className={`nav-item ${selectedItem === "verbs" ? "active" : ""}`}
            onClick={() => onNavClick("verbs")}
          >
            {t("nav.verbs")}
          </li>
          <li
            className={`nav-item ${
              selectedItem === "adjectives" ? "active" : ""
            }`}
            onClick={() => onNavClick("adjectives")}
          >
            {t("nav.adjectives")}
          </li>
          <li
            className={`nav-item ${selectedItem === "phrases" ? "active" : ""}`}
            onClick={() => onNavClick("phrases")}
          >
            {t("nav.phrases")}
          </li>
          <li
            className={`nav-item ${
              selectedItem === "functions" ? "active" : ""
            }`}
            onClick={() => onNavClick("functions")}
          >
            {t("nav.functions")}
          </li>
        </ul>
      </nav>
      <div>
        <FaUser className="icon-buttons" onClick={onUserDrawerClick} />
        <FaCog className="icon-buttons" onClick={onSettingsDrawerClick} />
      </div>
    </header>
  );
};
export default Navbar;
