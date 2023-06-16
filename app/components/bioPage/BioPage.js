// css
import styles from "./styles/Bio.module.scss";
// system components
import Image from "next/image";
import React from "react";
// UI components
import HeadLine from "@/app/components/bioPage/components/HeadLine";
import StackIcon from "@/app/components/bioPage/components/stackIcon";
// statics
import html5Svg from "../../../public/html-5-svgrepo-com.svg";
import css3Svg from "../../../public/css-3-svgrepo-com.svg";
import jsSvg from "../../../public/javascript-svgrepo-com.svg";
import sassSvg from "../../../public/sass-svgrepo-com.svg";
import reactSvg from "../../../public/react-javascript-js-framework-facebook-svgrepo-com.svg";
import nextjsSvg from "../../../public/nextJS-svgrepo-com.svg";
import gitSvg from "../../../public/git-svgrepo-com.svg";
import linuxSvg from "../../../public/linux-svgrepo-com.svg";

export default function Bio({ stackH2, children }) {
  return (
    <main className={styles.main}>
      <HeadLine />
      <section className={styles.techStackBox}>
        <h2>{stackH2}</h2>
        <div className={styles.iconsBox}>
          <StackIcon src={html5Svg} alt="HTML5 icon" span="HTML5" />
          <StackIcon src={css3Svg} alt="CSS3 icon" span="CSS3" />
          <StackIcon src={jsSvg} alt="JavaScript icon" span="JavaScript" />
          <StackIcon src={sassSvg} alt="SASS icon" span="SASS" />

          <StackIcon src={reactSvg} alt="React icon" span="React" />
          <StackIcon src={nextjsSvg} alt="Next.JS icon" span="Next.JS" />
          <StackIcon src={gitSvg} alt="Git icon" span="Git" />
          <StackIcon src={linuxSvg} alt="Linux icon" span="Linux" />
        </div>
      </section>
      {/* Text blocks */}
      <section className={styles.articlesBox}>{children}</section>
    </main>
  );
}
