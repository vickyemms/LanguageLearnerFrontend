import React from "react";
import { FaCog, FaUser } from "react-icons/fa";
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
          className={`nav-item ${selectedItem === "phrases" ? "active" : ""}`}
          onClick={() => onNavClick("phrases")}
        >
          Phrases
        </li>
        <li
          className={`nav-item ${selectedItem === "functions" ? "active" : ""}`}
          onClick={() => onNavClick("functions")}
        >
          Functions
        </li>
      </ul>
    </nav>
    <div>
      <FaUser className="icon-buttons" onClick={onSettingsClick} />
      <FaCog className="icon-buttons" onClick={onSettingsClick} />
    </div>
  </header>
);

export default Navbar;
