"use client";
// css
import styles from "./styles/page.module.scss";
// system tools
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// UI components
import LangControls from "./components/homePage/LangControls";
import Footer from "./components/footer/Footer";
// statics
// import cv from "../public/resume-svgrepo-com.svg";
import portfolioIcon from "../public/briefcase-portfolio-svgrepo-com.svg";
// dependencies
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Home() {
  const [lang, setLang] = useState("En");
  const [hideMenu, setHideMenu] = useState(true);
  // const [homeStart, setHomeStart] = useState(true);

  // setTimeout(deleteStartAnimation, 5000);

  function handleLang(language, toggleh1) {
    if (language === "Es") {
      setLang("Es");
    } else {
      setLang("En");
    }

    setHideMenu(toggleh1);
  }

  return (
    <>
      <main className={styles.main}>
        <LangControls handleLang={handleLang} />

        {/* Menu Links */}
        <ul className={styles.menuBox}>
          <li className={styles.menuIcon}>
            <Link href={lang === "En" ? "/bio" : "/spanish/bio"}>
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_8pL7DHZXvo.json"
                speed={1}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
              {lang === "En" ? <span>About Me</span> : <span>Sobre Mí</span>}
            </Link>
          </li>
          <li className={styles.menuIcon}>
            <Link
              href={
                lang === "En"
                  ? "https://drive.google.com/file/d/1Du8zEzC_UOjHdaaK-duZF1XeIgUli8a6/view?usp=sharing"
                  : "https://drive.google.com/file/d/1Du8zEzC_UOjHdaaK-duZF1XeIgUli8a6/view?usp=sharing"
              }
            >
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_4DLPlW.json"
                speed={1}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
              {lang === "En" ? (
                <span className={styles.resumeTxt}>Resume</span>
              ) : (
                <span className={styles.resumeTxt}>Currículum</span>
              )}
            </Link>
          </li>
          <li className={styles.menuIcon}>
            <Link href={lang === "En" ? "/portfolio" : "/spanish/portafolio"}>
              <Player
                autoplay
                loop
                src="https://assets8.lottiefiles.com/private_files/lf30_6npzscwg.json"
                speed={1}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
              {lang === "En" ? <span>Portfolio</span> : <span>Portafolio</span>}
            </Link>
          </li>
        </ul>

        <h1 className={styles.h1}>Karin Arroyo</h1>
        {lang === "En" ? (
          <div className={styles.subheaders}>
            <h2>Frontend Developer</h2>
            <h3>Website</h3>
          </div>
        ) : (
          <div className={styles.subheaders}>
            <h2>Desarrollador Frontend</h2>
            <h3>Website</h3>
          </div>
        )}
      </main>
      <Footer style={styles.footerHome} />
    </>
  );
}
