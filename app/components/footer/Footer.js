import React from "react";
import styles from "./styles/Footer.module.scss";
import Contact from "./contact/Contact";

export default function Footer({ style }) {
  return (
    <footer className={style}>
      <Contact />
    </footer>
  );
}

Footer.defaultProps = {
  style: styles.footer,
};
