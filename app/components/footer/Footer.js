import React from "react";
import styles from "./styles/Footer.module.scss";
import Contact from "./contact/Contact";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Contact />
    </footer>
  );
}
