// css
import styles from "./styles/Project.module.scss";
// system tools
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <Link href={siteLink}>
              <span>Website</span>
            </Link>
            <Link href={codeLink}>
              <span>Repo</span>
            </Link>
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.descriptionH}>{descriptionH}</h3>
          <p>{description}</p>
        </section>
        <section className={styles.section}>
          <h3>{madeWith}</h3>
          {children}
        </section>
      </div>
    </article>
  );
}
