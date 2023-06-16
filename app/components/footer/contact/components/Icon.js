import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles/Icon.module.scss";

export default function Icon({ src, alt, link }) {
  return (
    <Link href={link}>
      <Image
        className={styles.icon}
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </Link>
  );
}
