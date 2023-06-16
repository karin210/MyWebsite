import Image from "next/image";
import React from "react";
import styles from "./styles/Photo.module.scss";
import photo from "../../../../public/myPhoto.jpg";

export default function Photo() {
  return (
    <figure className={styles.fig}>
      <Image
        className={styles.img}
        src={photo}
        alt="Karin photo"
        width={500}
        height={500}
      />
    </figure>
  );
}
