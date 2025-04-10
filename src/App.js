import React, { useState } from "react";
import "./styles/App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import UserDrawer from "./components/UserDrawer";
import SettingsDrawer from "./components/SettingsDrawer";
import Nouns from "./components/Nouns";
import Verbs from "./components/Verbs";
import Adjectives from "./components/Adjectives";
import Phrases from "./components/Phrases";
import Functions from "./components/Functions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState("nouns");
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

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

  const handleUserDrawerClick = () => {
    setIsUserDrawerOpen(true);
  };

  const closeUserDrawer = () => {
    setIsUserDrawerOpen(false);
  };

  const handleSettingsDrawerClick = () => {
    setIsSettingsDrawerOpen(true);
  };

  const closeSettingsDrawer = () => {
    setIsSettingsDrawerOpen(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Navbar
            selectedItem={selectedItem}
            onNavClick={handleNavClick}
            onUserDrawerClick={handleUserDrawerClick}
            onSettingsDrawerClick={handleSettingsDrawerClick}
          />
          <div className="main-content">{renderContent()}</div>
          <UserDrawer isOpen={isUserDrawerOpen} onClose={closeUserDrawer} />
          <SettingsDrawer
            isOpen={isSettingsDrawerOpen}
            onClose={closeSettingsDrawer}
          />
        </>
      )}
    </div>
  );
}

export default App;
