import React from "react";
import styles from "./styles/TextBlock.module.scss";

export default function TextBlock({ h, body }) {
  return (
    <section className={styles.sectionBox}>
      <h2>{h}</h2>
      <p>{body}</p>
    </section>
  );
}
