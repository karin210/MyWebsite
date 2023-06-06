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
    setShowLanguages(!showLanguages);
  }

  useEffect(() => {
    handleLang(lang);
  }, [lang]);

  function handleClick(e) {
    e.preventDefault();
    setShowLanguages(true);
  }

  console.log(showLanguages);

  return (
    <form className={showLanguages ? styles.form : styles.closeForm}>
      {lang === "En" ? (
        <>
          <label htmlFor="lang">
            <button className={styles.dynamic}>Select language</button>
          </label>
          <div className={styles.buttonsBox}>
            <input
              className={styles.enBtn}
              name="lang"
              value="En"
              type="radio"
              onClick={handleChange}
            />
            <input
              onClick={handleChange}
              className={styles.esBtn}
              name="lang"
              value="Es"
              type="radio"
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor="lang">
            <button className={styles.dynamic1} onClick={handleClick}>
              Selecciona un idioma
            </button>
          </label>

          <div className={styles.buttonsBox}>
            <input
              className={styles.enBtn}
              name="lang"
              value="En"
              type="radio"
              onClick={handleChange}
            />
            <input
              onClick={handleChange}
              className={styles.esBtn}
              name="lang"
              value="Es"
              type="radio"
            />
          </div>
        </>
      )}
    </form>
  );
}
