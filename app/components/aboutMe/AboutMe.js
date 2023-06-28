// css
import styles from "./styles/AboutMe.module.scss";
// system components
import Image from "next/image";
import React from "react";
// UI components
import HeadLine from "@/app/components/aboutMe/components/HeadLine";
import StackIcon from "@/app/components/aboutMe/components/stackIcon";
// statics
import html5Svg from "../../../public/blueHTML.svg";
import css3Svg from "../../../public/blueCSS.svg";
import jsSvg from "../../../public/blueJS.svg";
import sassSvg from "../../../public/blueSass.svg";
import reactSvg from "../../../public/blueReact.svg";
import nextjsSvg from "../../../public/blueNextjs.svg";
import gitSvg from "../../../public/blueGit.svg";
import linuxSvg from "../../../public/blueLinux.svg";
import githubSvg from "../../../public/blueGithub.svg";
import vercelSvg from "../../../public/blueVercel.svg";

export default function AboutMe({ stackH2, children }) {
  return (
    <main className={styles.main}>
      <HeadLine />
      <section className={styles.techStackBox}>
        <h2 className={styles.stackH2}>{stackH2}</h2>
        <span className={styles.bracket1}>&#91;</span>
        <div className={styles.iconsBox}>
          <StackIcon src={html5Svg} alt="HTML5 icon blue" span="HTML5" />
          <span className={styles.comma}>,</span>
          <StackIcon src={css3Svg} alt="CSS3 icon blue" span="CSS3" />
          <span className={styles.comma}>,</span>
          <StackIcon src={sassSvg} alt="SASS icon blue" span="SASS" />
          <span className={styles.comma}>,</span>
          <StackIcon src={jsSvg} alt="JavaScript icon blue" span="JavaScript" />
          <span className={styles.comma}>,</span>

          <StackIcon src={reactSvg} alt="React icon blue" span="React" />
          <span className={styles.comma}>,</span>
          <StackIcon src={nextjsSvg} alt="Next.JS icon blue" span="Next.JS" />
          <span className={styles.comma}>,</span>
          <StackIcon src={gitSvg} alt="Git icon blue" span="Git" />
          <span className={styles.comma}>,</span>
          <StackIcon src={githubSvg} alt="GitHub icon blue" span="GitHub" />
          <span className={styles.comma}>,</span>
          <StackIcon src={vercelSvg} alt="Vercel icon blue" span="Git" />
          <span className={styles.comma}>,</span>
          <StackIcon src={linuxSvg} alt="Linux icon blue" span="Linux" />
        </div>
        <span className={styles.bracket2}>&#93;</span>
      </section>
      {/* Text blocks */}
      <section className={styles.articlesBox}>{children}</section>
    </main>
  );
}
