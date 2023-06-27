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
          <li className={styles.menuItemBox}>
            <Link href={lang === "En" ? "/about-me" : "/spanish/sobre-mi"}>
              <article className={`${styles.menuItem} ${styles.firstMenuItem}`}>
                <div className={`${styles.svg} ${styles.svg1}`}>
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
                </div>
                {lang === "En" ? (
                  <span
                    className={`${styles.menuItemTxt} ${styles.aboutMeTxt}`}
                  >
                    About Me
                  </span>
                ) : (
                  <span
                    className={`${styles.menuItemTxt} ${styles.aboutMeTxt}`}
                  >
                    Sobre Mí
                  </span>
                )}
              </article>
            </Link>
          </li>
          <li className={styles.menuItemBox}>
            <Link
              href={
                lang === "En"
                  ? "https://drive.google.com/file/d/1TmEKG1vnPwZc6M1WcId-_dy29Pt5uN90/view?usp=sharing"
                  : "https://drive.google.com/file/d/1TmEKG1vnPwZc6M1WcId-_dy29Pt5uN90/view?usp=sharing"
              }
            >
              <article className={styles.menuItem}>
                <div className={`${styles.svg} ${styles.svg2}`}>
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
                </div>
                {lang === "En" ? (
                  <span className={`${styles.menuItemTxt} ${styles.resumeTxt}`}>
                    Resume
                  </span>
                ) : (
                  <span className={`${styles.menuItemTxt} ${styles.resumeTxt}`}>
                    Currículum
                  </span>
                )}
              </article>
            </Link>
          </li>
          <li className={styles.menuItemBox}>
            <Link href={lang === "En" ? "/portfolio" : "/spanish/portafolio"}>
              <article className={styles.menuItem}>
                <div className={`${styles.svg} ${styles.svg3}`}>
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
                </div>
                {lang === "En" ? (
                  <span
                    className={`${styles.menuItemTxt} ${styles.portfolioTxt}`}
                  >
                    Portfolio
                  </span>
                ) : (
                  <span
                    className={`${styles.menuItemTxt} ${styles.portfolioTxt}`}
                  >
                    Portafolio
                  </span>
                )}
              </article>
            </Link>
          </li>
        </ul>
        <section className={styles.authorInfo}>
          <h1 className={styles.h1}>Karin_Arroyo</h1>
          {lang === "En" ? (
            <div className={styles.subheaders}>
              <h2>&#60; Frontend_Developer /&#62; </h2>
              <h3>Website</h3>
            </div>
          ) : (
            <div className={styles.subheaders}>
              <h2>&#60; Desarrollador_Frontend /&#62; </h2>
              <h3>Website</h3>
            </div>
          )}
        </section>
      </main>
      <Footer style={styles.footerHome} />
    </>
  );
}
