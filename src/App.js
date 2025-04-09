import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Nouns from "./components/Nouns";
import Verbs from "./components/Verbs";
import Adjectives from "./components/Adjectives";
import Functions from "./components/Functions";

function App() {
  const [selectedItem, setSelectedItem] = useState("nouns");

  const handleNavClick = (item) => {
    setSelectedItem(item);
  };

  const handleSettingsClick = () => {};

  return (
    <div className="App">
      <Navbar
        selectedItem={selectedItem}
        onNavClick={handleNavClick}
        onSettingsClick={handleSettingsClick}
      />
      <div className="main-content">
        {selectedItem === "nouns" && <Nouns />}
        {selectedItem === "verbs" && <Verbs />}
        {selectedItem === "adjectives" && <Adjectives />}
        {selectedItem === "functions" && <Functions />}
      </div>
    </div>
  );
}

export default App;
