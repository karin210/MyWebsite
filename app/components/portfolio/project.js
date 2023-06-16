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
      <section>
        <h2>{title}</h2>
        <div className={styles.links}>
          <Link href={siteLink}>
            <span>Website</span>
          </Link>
          <Link href={codeLink}>
            <span>Repo</span>
          </Link>
        </div>
      </section>
      <section>
        <h3 className={styles.descriptionH}>{descriptionH}</h3>
        <p>{description}</p>
      </section>
      <section>
        <h2>{madeWith}</h2>
        {children}
      </section>
    </article>
  );
}
