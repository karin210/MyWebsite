"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/LangControls.module.scss";

export default function LangControls({ handleLang }) {
  const [lang, setLang] = useState("En");
  const [showLanguages, setShowLanguages] = useState(true);
  const [homeStart, setHomeStart] = useState(true);

  function deleteStartAnimation() {
    setHomeStart(false);
  }

  setTimeout(deleteStartAnimation, 4400);

  function changeLang(e) {
    if (e.target.value === "Es") {
      setLang("Es");
    } else {
      setLang("En");
    }
    setShowLanguages(!showLanguages);
  }

  useEffect(() => {
    handleLang(lang, showLanguages);
  }, [lang, showLanguages]);

  function handleClick(e) {
    e.preventDefault();
    setShowLanguages(true);
  }

  return (
    <div className={homeStart ? styles.controlsStart : styles.controlsBox}>
      <form className={showLanguages ? styles.form : styles.closeForm}>
        {lang === "En" ? (
          <>
            <label htmlFor="lang">Switch language</label>
            <div className={styles.buttonsBox}>
              <input
                className={styles.enBtn}
                name="lang"
                value="En"
                type="radio"
                onClick={changeLang}
              />
              <input
                onClick={changeLang}
                className={styles.esBtn}
                name="lang"
                value="Es"
                type="radio"
              />
            </div>
          </>
        ) : (
          <>
            <label htmlFor="lang">Cambiar idioma</label>

            <div className={styles.buttonsBox}>
              <input
                className={styles.enBtn}
                name="lang"
                value="En"
                type="radio"
                onClick={changeLang}
              />
              <input
                onClick={changeLang}
                className={styles.esBtn}
                name="lang"
                value="Es"
                type="radio"
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
}
