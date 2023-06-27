// css
import styles from "./styles/about-me.module.scss";
// system components
import Image from "next/image";
import React from "react";
// UI components
import AboutMe from "@/app/components/aboutMe/AboutMe";
import TextBlock from "@/app/components/aboutMe/components/textBlock";

export default function aboutMePage() {
  return (
    <>
      <AboutMe stackH2="Tech_Stack">
        <TextBlock
          textClassOpen={styles.textOpen1}
          textClassClosed={styles.textClosed1}
          h="How_did_I_learn_code?"
          body="I was introduced into the web development by a developer friend in
        Guadalajara who teach me some basis of frontend development. I learn my
        main skills by reading documentation in sites like w3schools.com,
        developer.mozilla.org, the official websites of technologies like
        React and Next.js, and some YouTube channels about programming. I did
        courses in the platform of freecodecamp.org too."
        />
        <TextBlock
          textClassOpen={styles.textOpen2}
          textClassClosed={styles.textClosed2}
          h="Why_web_development?"
          body="I had no knowledge about the programming fields, I just wanted enter
          into the Tech industry. Before I'ad started reading about the
          largest and most innovative companies in the world like Google,
          Facebook, Amazon etc. And I found they are so big because their
          product is software based and have an insane growth potential.
          I'ad heard working in Tech were different than other industries
          and work in such a big projects would be great!. 
          I though the first thing I had to do was learning how to build a
          website so I found several websites builders like Wix and WordPress
          but I wanted learn how to code it. Finally found I needed to learn
          HTML, CSS and JavaScript to build a website, asked to a developer
          friend about it and he talked to me about the work in Tech, installed
          Ubuntu in my laptop and helped me to start in web development."
        />
        <TextBlock
          textClassOpen={styles.textOpen3}
          textClassClosed={styles.textClosed3}
          h="Why_React?"
          body="I realized it's not possible to write complex and easy to mantain
          web apps just with Vanilla JavaScript. My friend considered that a
          good beginner tool to build larger projects was React, then I
          researched about the frameworks and libraries. Svelte was another
          option my friend suggested me, but React is more popular, is backed up
          by Meta, has a large community and pretty much tools to work with so I
          chose it."
        />
      </AboutMe>
    </>
  );
}
