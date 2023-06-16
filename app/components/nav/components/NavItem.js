import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles/NavItem.module.scss";

export default function NavItem({ link, src, alt }) {
  return (
    <Link href={link}>
      <Image
        className={styles.img}
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </Link>
  );
}
