"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/LangControls.module.scss";

export default function LangControls({ handleLang }) {
  const [lang, setLang] = useState("En");
  const [showLanguages, setShowLanguages] = useState(true);

  function handleChange(e) {
    if (e.target.value === "Es") {
      setLang("Es");
    } else {
      setLang("En");
    }
    setShowLanguages(false);
  }

  useEffect(() => {
    handleLang(lang);
  }, [lang]);

  function handleClick(e) {
    e.preventDefault();
    setShowLanguages(true);
  }

  return (
    <form className={styles.form}>
      {lang === "En" ? (
        <>
          <label htmlFor="lang">
            <button className={styles.dynamic} onClick={handleClick}>
              Select language
            </button>
          </label>
          {showLanguages && (
            <div
              className={showLanguages ? styles.buttonsBox : styles.hiddeLang}
            >
              <input
                className={styles.enBtn}
                name="lang"
                value="En"
                type="radio"
                onChange={handleChange}
              />
              <input
                onChange={handleChange}
                className={styles.esBtn}
                name="lang"
                value="Es"
                type="radio"
              />
            </div>
          )}
        </>
      ) : (
        <>
          <label htmlFor="lang">
            <button className={styles.dynamic1} onClick={handleClick}>
              Selecciona un idioma
            </button>
          </label>
          {showLanguages && (
            <div
              className={showLanguages ? styles.buttonsBox : styles.hiddeLang}
            >
              <input
                className={styles.enBtn}
                name="lang"
                value="En"
                type="radio"
                onChange={handleChange}
              />
              <input
                onChange={handleChange}
                className={styles.esBtn}
                name="lang"
                value="Es"
                type="radio"
              />
            </div>
          )}
        </>
      )}
    </form>
  );
}
