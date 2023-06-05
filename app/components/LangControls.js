"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/LangControls.module.scss";

export default function LangControls({ handleLang }) {
  const [lang, setLang] = useState("En");

  function handleChange(e) {
    if (e.target.value === "Es") {
      setLang("Es");
    } else {
      setLang("En");
    }

    handleLang(e.target.value);
  }

  return (
    <form className={styles.form}>
      {lang === "En" ? (
        <>
          <label className={styles.dynamic} htmlFor="lang">
            Select language
          </label>
          <div className={styles.buttonsBox}>
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
        </>
      ) : (
        <>
          <label className={styles.dynamic1} htmlFor="lang">
            Selecciona un idioma
          </label>
          <div className={styles.buttonsBox}>
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
        </>
      )}
    </form>
  );
}
