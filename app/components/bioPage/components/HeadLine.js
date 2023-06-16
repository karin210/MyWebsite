"use client";
// css
import styles from "./styles/HeadLine.module.scss";
// system tools
import React from "react";
import Photo from "./photo";
import { usePathname } from "next/navigation";

export default function HeadLine() {
  const url = usePathname();
  const isSpanish = url.includes("spanish");
  return (
    <section className={styles.headlineBox}>
      <Photo />
      <div className={styles.textBox}>
        <h1>Carlos Karin Arroyo Chagoya</h1>
        {isSpanish ? (
          <p>
            Trabajo para construir aplicaciones grandiosas y convertirme en
            desarrollador Full-Stack. Estoy en busca de un equipo con quienes
            crecer juntos.
          </p>
        ) : (
          <p>
            Aiming to build great web apps and become a Full-Stack developer. I
            want to find a great team with whom grow along.
          </p>
        )}
      </div>
    </section>
  );
}
