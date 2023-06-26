"use client";
import React, { useState } from "react";
import styles from "./styles/TextBlock.module.scss";

export default function TextBlock({ h, body, textClassOpen, textClassClosed }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  if (open) {
    console.log(true);
  } else {
    console.log(false);
  }
  return (
    <section className={styles.sectionBox} onClick={handleClick}>
      <h2>{h}</h2>
      <p className={open ? textClassOpen : textClassClosed}>{body}</p>
    </section>
  );
}
