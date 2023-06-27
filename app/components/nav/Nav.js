"use client";
// css
import styles from "./styles/Nav.module.scss";
// system tools
import { usePathname } from "next/navigation";
import React from "react";
// UI components
import NavItem from "./components/NavItem";
// statics
import blueFolder from "../../../public/blueFolder.svg";
import blueProfile from "../../../public/blueProfile.svg";
import blackHome from "../../../public/blackHome.svg";
import blackFolder from "../../../public/blackFolder.svg";
import blackProfile from "../../../public/blackProfile.svg";
import blackResume from "../../../public/blackResume.svg";

export default function Nav() {
  const url = usePathname();
  const isSpanish = url.includes("spanish");
  const inAbout = url.includes("about") || url.includes("sobre");
  const inPortfolio = url.includes("portfolio") || url.includes("portafolio");

  return (
    <nav className={styles.navBox}>
      <NavItem
        link="/"
        src={blackHome}
        alt="Home Icon"
        text={isSpanish ? "Inicio" : "Home"}
      />
      <NavItem
        link={isSpanish ? "/spanish/sobre-mi" : "/about-me"}
        src={inAbout ? blueProfile : blackProfile}
        alt="Profile Icon"
        text={isSpanish ? "Sobre Mí" : "About Me"}
      />
      <NavItem
        link={isSpanish ? "/spanish/portafolio" : "/portfolio"}
        src={inPortfolio ? blueFolder : blackFolder}
        alt="Portfolio Icon"
        text={isSpanish ? "Portafolio" : "Portfolio"}
      />
      <NavItem
        link="https://drive.google.com/file/d/1TmEKG1vnPwZc6M1WcId-_dy29Pt5uN90/view?usp=sharing"
        src={blackResume}
        alt="Resume Icon"
        text={isSpanish ? "Currículum" : "Resume"}
      />
    </nav>
  );
}
