import Image from "next/image";
import React from "react";
import styles from "./styles/StackIcon.module.scss";

export default function StackIcon({ src, alt, span }) {
  return (
    <div className={styles.iconBox}>
      <Image
        className={styles.img}
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
      <span>{span}</span>
    </div>
  );
}
