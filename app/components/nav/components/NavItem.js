// css
import styles from "./styles/NavItem.module.scss";
// system tools
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavItem({ link, src, alt, text }) {
  return (
    <Link href={link} legacyBehavior>
      <a className={styles.link}>
        <Image
          className={styles.img}
          src={src}
          alt={alt}
          width={500}
          height={500}
        />
        <span className={styles.text}>{text}</span>
      </a>
    </Link>
  );
}
