"use client";
// css
import styles from "./styles/Nav.module.scss";
// system tools
import { usePathname } from "next/navigation";
import React from "react";
// UI components
import NavItem from "./components/NavItem";
// statics
import homeIcon from "../../../public/home-svgrepo-com.svg";
import folderIcon from "../../../public/folder-svgrepo-com.svg";
import profileIcon from "../../../public/profile-round-1342-svgrepo-com.svg";
import resumeIcon from "../../../public/resume-4-svgrepo-com.svg";

export default function Nav() {
  const url = usePathname();
  const isSpanish = url.includes("spanish");

  return (
    <nav className={styles.navBox}>
      <NavItem link="/" src={homeIcon} alt="Home Icon" />
      <NavItem
        link={isSpanish ? "/spanish/bio" : "/bio"}
        src={profileIcon}
        alt="Profile Icon"
      />
      <NavItem
        link={isSpanish ? "/spanish/portafolio" : "/portfolio"}
        src={folderIcon}
        alt="Portfolio Icon"
      />
      <NavItem link="_blank" src={resumeIcon} alt="Resume Icon" />
    </nav>
  );
}
