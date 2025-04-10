import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Nouns from "./components/Nouns";
import Verbs from "./components/Verbs";
import Adjectives from "./components/Adjectives";
import Phrases from "./components/Phrases";
import Functions from "./components/Functions";

function App() {
  const [selectedItem, setSelectedItem] = useState("nouns");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleNavClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "nouns":
        return <Nouns />;
      case "verbs":
        return <Verbs />;
      case "adjectives":
        return <Adjectives />;
      case "phrases":
        return <Phrases />;
      case "functions":
        return <Functions />;
      default:
        return null;
    }
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="App">
      <Navbar
        selectedItem={selectedItem}
        onNavClick={handleNavClick}
        onSettingsClick={handleSettingsClick}
      />
      <div className="main-content">{renderContent()}</div>
      <Settings isOpen={isSettingsOpen} onClose={closeSettings} />
    </div>
  );
}

export default App;
