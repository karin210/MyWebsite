// css
import styles from "./styles/Project.module.scss";
// system tools
import Image from "next/image";
import Link from "next/link";
import React from "react";
// statics
import redirectIcon from "../../../public/redirect.svg";

export default function Project({
  title,
  siteLink,
  codeLink,
  descriptionH,
  description,
  madeWith,
  children,
}) {
  return (
    <article className={styles.projectBox}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <section className={styles.section}>
          <div className={styles.links}>
            <Link legacyBehavior href={siteLink}>
              <a className={styles.link}>
                <span>Website</span>
                <Image
                  className={styles.redirectIcon}
                  src={redirectIcon}
                  width={200}
                  height={200}
                  alt="redirect icon"
                />
              </a>
            </Link>
            <Link legacyBehavior href={codeLink}>
              <a className={styles.link}>
                <span>Repo</span>
                <Image
                  className={styles.redirectIcon}
                  src={redirectIcon}
                  width={200}
                  height={200}
                  alt="redirect icon"
                />
              </a>
            </Link>
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.descriptionH}>{descriptionH}:</h3>
          <p className={styles.description}>{description}</p>
        </section>
        <section className={`${styles.section} ${styles.stackSection}`}>
          <h3 className={styles.madeWithH}>{madeWith}</h3>
          {children}
        </section>
      </div>
    </article>
  );
}
