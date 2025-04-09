import React from "react";
import { FaCog } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = ({ selectedItem, onNavClick, onSettingsClick }) => (
  <header>
    <h1 className="logo">Polyglot</h1>
    <nav className="nav-bar">
      <ul className="nav-list">
        <li
          className={`nav-item ${selectedItem === "nouns" ? "active" : ""}`}
          onClick={() => onNavClick("nouns")}
        >
          Nouns
        </li>
        <li
          className={`nav-item ${selectedItem === "verbs" ? "active" : ""}`}
          onClick={() => onNavClick("verbs")}
        >
          Verbs
        </li>
        <li
          className={`nav-item ${
            selectedItem === "adjectives" ? "active" : ""
          }`}
          onClick={() => onNavClick("adjectives")}
        >
          Adjectives
        </li>
        <li
          className={`nav-item ${selectedItem === "functions" ? "active" : ""}`}
          onClick={() => onNavClick("functions")}
        >
          Functions
        </li>
      </ul>
    </nav>
    <FaCog className="settings-icon" onClick={onSettingsClick} />
  </header>
);

export default Navbar;
