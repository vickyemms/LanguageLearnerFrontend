import React, { useState } from "react";
import "./styles/App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EmailVerification from "./components/EmailVerification";
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
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [showVerification, setShowVerification] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedItem, setSelectedItem] = useState("nouns");
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("sv");

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserDetails(user);
  };

  const handleNavClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "nouns":
        return <Nouns sourceLang={sourceLang} targetLang={targetLang} />;
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

  const handleSignOut = () => {
    setIsSettingsDrawerOpen(false);
    setIsLoggedIn(false);
    setUserDetails(null);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        window.location.search.includes("token=") && showVerification ? (
          <EmailVerification
            onSwitchToLogin={() => {
              window.history.replaceState(null, "", window.location.pathname);
              setShowVerification(false);
            }}
          />
        ) : isSignupMode ? (
          <Signup
            onSignupSuccess={handleLoginSuccess}
            onSwitchToLogin={() => setIsSignupMode(false)}
          />
        ) : (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onSwitchToSignup={() => setIsSignupMode(true)}
          />
        )
      ) : (
        <>
          <Navbar
            selectedItem={selectedItem}
            onNavClick={handleNavClick}
            onUserDrawerClick={handleUserDrawerClick}
            onSettingsDrawerClick={handleSettingsDrawerClick}
          />
          <div className="main-content">{renderContent()}</div>
          <UserDrawer
            isOpen={isUserDrawerOpen}
            onClose={closeUserDrawer}
            userDetails={userDetails}
          />
          <SettingsDrawer
            isOpen={isSettingsDrawerOpen}
            onClose={closeSettingsDrawer}
            onSignOut={handleSignOut}
            sourceLang={sourceLang}
            targetLang={targetLang}
            setSourceLang={setSourceLang}
            setTargetLang={setTargetLang}
          />
        </>
      )}
    </div>
  );
}

export default App;
