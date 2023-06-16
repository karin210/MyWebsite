import React from "react";
import Photo from "./photo";
import styles from "./styles/HeadLine.module.scss";

export default function HeadLine() {
  return (
    <section className={styles.headlineBox}>
      <Photo />
      <div className={styles.textBox}>
        <h1>Carlos Karin Arroyo Chagoya</h1>
        <p>
          I&apos;m a Frontend Delevoper. I work to make products that people
          love by having a good comunication with the end user to constantly
          make improvements on the product. I like to help boost a great culture
          in the teams.
        </p>
      </div>
    </section>
  );
}
