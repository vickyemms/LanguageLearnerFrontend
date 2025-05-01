import React, { useEffect, useState } from "react";
import "../styles/quiz.css";
import { useTranslation } from "react-i18next";

const Nouns = ({ sourceLang, targetLang }) => {
  const { t } = useTranslation();

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
      <h2>{t("quiz.nouns")}</h2>
      <div className="quiz-settings-container">
        <div className="quiz-settings-item">
          <label>{t("quiz.level")}:</label>
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
          <label>{t("quiz.category")}:</label>
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
          <label>{t("quiz.nounPhrase")}:</label>
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
          <label>{t("quiz.quizMode")}:</label>
          <div className="toggle-switch" onClick={toggleQuizMode}>
            <div
              className={`switch-option ${quizMode === "word" ? "active" : ""}`}
            >
              {t("quiz.word")}
            </div>
            <div
              className={`switch-option ${
                quizMode === "sentence" ? "active" : ""
              }`}
            >
              {t("quiz.sentence")}
            </div>
          </div>
        </div>
      </div>
      <div className="quiz-container">
        <button className="start-quiz-btn">{t("quiz.start")}</button>
      </div>
    </div>
  );
};

export default Nouns;
