"use client";
// css
import styles from "./styles/HeadLine.module.scss";
// system tools
import React from "react";
import { usePathname } from "next/navigation";
// UI compnents
import Photo from "./photo";

export default function HeadLine() {
  const url = usePathname();
  const isSpanish = url.includes("spanish");
  return (
    <section className={styles.headlineBox}>
      <Photo />
      <div className={styles.textBox}>
        <h1>Carlos_Karin_Arroyo_Chagoya</h1>
        {isSpanish ? (
          <p>
            Soy un desarrollador front-end autodidácta con un enorme interés por
            el desarrollo web y la tecnología. Mi próxima meta es convertirme en
            desarrollador Full-Stack. Estoy en busca de un equipo con quienes
            crecer juntos.
          </p>
        ) : (
          <p>
            I&apos;m a self-though front-end developer with a long interest on
            web development and Tech aiming to become in a Full-Stack developer.
            I want to find a great team with whom grow along.
          </p>
        )}
      </div>
    </section>
  );
}
