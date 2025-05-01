import React, { useEffect, useState } from "react";
import "../styles/quiz.css";

const Nouns = ({ sourceLang, targetLang }) => {
  const [nouns, setNouns] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("A1");
  const [selectedCategory, setSelectedCategory] = useState("animal");
  const [selectedPhraseType, setSelectedPhraseType] = useState("baseForm");

  useEffect(() => {
    fetch(
      `http://localhost:8080/nouns?sourceLang=${sourceLang}&targetLang=${targetLang}&category=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => setNouns(data));
  }, [sourceLang, targetLang, selectedCategory]);

  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const categories = ["animals"];

  const phraseTypes = [
    "baseForm",
    "singularIndefinite",
    "singularDefinite",
    "pluralIndefinite",
    "pluralDefinite",
  ];

  const [quizMode, setQuizMode] = useState("word");

  const toggleQuizMode = () => {
    setQuizMode((prev) => (prev === "word" ? "sentence" : "word"));
  };

  return (
    <div>
      <h2>Nouns</h2>
      <div className="quiz-settings-container">
        <div className="quiz-settings-item">
          <label>Level:</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div className="quiz-settings-item">
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="quiz-settings-item">
          <label>Noun Phrase:</label>
          <select
            value={selectedPhraseType}
            onChange={(e) => setSelectedPhraseType(e.target.value)}
          >
            {phraseTypes.map((phrase) => (
              <option key={phrase} value={phrase}>
                {phrase}
              </option>
            ))}
          </select>
        </div>
        <div className="quiz-settings-item">
          <label>Quiz Mode:</label>
          <div className="toggle-switch" onClick={toggleQuizMode}>
            <div
              className={`switch-option ${quizMode === "word" ? "active" : ""}`}
            >
              Word
            </div>
            <div
              className={`switch-option ${
                quizMode === "sentence" ? "active" : ""
              }`}
            >
              Sentence
            </div>
          </div>
        </div>
      </div>
      <div className="quiz-container">
        <button className="start-quiz-btn">Start Quiz</button>
      </div>
    </div>
  );
};

export default Nouns;
