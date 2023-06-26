// css
import styles from "./styles/Portafolio.module.scss";
// system components
import React from "react";
import Project from "@/app/components/portfolio/project";
import Image from "next/image";
// UI components

// statics
import htmlIcon from "../../../public/HTMLLogo.svg";
import cssIcon from "../../../public/CSSLogo.svg";
import jsIcon from "../../../public/JSLogo.svg";
import sassIcon from "../../../public/SassLogo.svg";
import reactIcon from "../../../public/ReactLogo.svg";
import nextjsIcon from "../../../public/NextJSLogo.svg";
import astroIcon from "../../../public/AstroLogo.svg";
import mongodbIcon from "../../../public/MongoDBLogo.svg";
import nodejsIcon from "../../../public/NodeJSLogo.svg";

export default function Portfolio() {
  return (
    <main className={styles.projectsBox}>
      <Project
        title="nextEvents"
        siteLink="https://next-events-pi-sandy.vercel.app/"
        codeLink="https://github.com/karin210/nextEvents"
        descriptionH="Descripción"
        description="App de registro para eventos"
        madeWith="Hecho_con:"
      >
        <div className={styles.iconsBox}>
          <Image
            className={styles.icon}
            src={htmlIcon}
            alt="HTML icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={cssIcon}
            alt="CSS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={jsIcon}
            alt="JavaScript icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={reactIcon}
            alt="React icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={sassIcon}
            alt="SASS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={nextjsIcon}
            alt="NextJS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={mongodbIcon}
            alt="Mongodb icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={nodejsIcon}
            alt="Nodejs icon"
            width={500}
            height={500}
          />
        </div>
      </Project>
      <Project
        title="calc_react"
        siteLink="https://karin210.github.io/calc_react/"
        codeLink="https://github.com/karin210/calc_react"
        descriptionH="Descripción"
        description="Calculadora"
        madeWith="Hecho_con:"
      >
        <div className={styles.iconsBox}>
          <Image
            className={styles.icon}
            src={htmlIcon}
            alt="HTML icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={cssIcon}
            alt="CSS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={jsIcon}
            alt="JavaScript icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={reactIcon}
            alt="React icon"
            width={500}
            height={500}
          />
        </div>
      </Project>
      <Project
        title="avocado"
        siteLink="https://karin210.github.io/avocado/"
        codeLink="https://github.com/karin210/avocado"
        descriptionH="Descripción"
        description="Website de exportador de aguacate"
        madeWith="Hecho_con:"
      >
        <div className={styles.iconsBox}>
          <Image
            className={styles.icon}
            src={htmlIcon}
            alt="HTML icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={cssIcon}
            alt="CSS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={jsIcon}
            alt="JavaScript icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={astroIcon}
            alt="Astro icon"
            width={500}
            height={500}
          />
        </div>
      </Project>
      <Project
        title="PubliciCat"
        siteLink="https://karin210.github.io/PubliciCat/"
        codeLink="https://github.com/karin210/PubliciCat"
        descriptionH="Descripción"
        description="Website de empresa de marketing"
        madeWith="Hecho_con:"
      >
        <div className={styles.iconsBox}>
          <Image
            className={styles.icon}
            src={htmlIcon}
            alt="HTML icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={cssIcon}
            alt="CSS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={jsIcon}
            alt="JavaScript icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={reactIcon}
            alt="React icon"
            width={500}
            height={500}
          />
        </div>
      </Project>
      <Project
        title="MyWebsite"
        siteLink="https://my-website-karin210.vercel.app"
        codeLink="https://github.com/karin210/MyWebsite"
        descriptionH="Description"
        description="Website personal"
        madeWith="Hecho_con:"
      >
        <div className={styles.iconsBox}>
          <Image
            className={styles.icon}
            src={htmlIcon}
            alt="HTML icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={cssIcon}
            alt="CSS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={jsIcon}
            alt="JavaScript icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={reactIcon}
            alt="React icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={sassIcon}
            alt="SASS icon"
            width={500}
            height={500}
          />
          <Image
            className={styles.icon}
            src={nextjsIcon}
            alt="NextJS icon"
            width={500}
            height={500}
          />
        </div>
      </Project>
    </main>
  );
}
