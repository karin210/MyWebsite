"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import LangControls from "./components/LangControls";
import styles from "./styles/page.module.scss";

export default function Home() {
  const [lang, setLang] = useState("En");
  const [showMenu, setShowMenu] = useState(null);

  function handleLang(language, toggleh1) {
    if (language === "Es") {
      setLang("Es");
    } else {
      setLang("En");
    }

    setShowMenu(toggleh1);
  }

  return (
    <main className={styles.main}>
      <LangControls handleLang={handleLang} />
      {showMenu === true ? <h1>Karin_Arroyo</h1> : <h1>Menu</h1>}

      {lang === "En" ? (
        <div>
          <h2 className={styles.dynamic1}>Frontend Developer</h2>
          <h3>Website</h3>
        </div>
      ) : (
        <div>
          <h2 className={styles.dynamic}>Desarrollador Frontend</h2>
          <h3>Website</h3>
        </div>
      )}
    </main>
  );
}
