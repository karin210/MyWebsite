// css
import styles from "./styles/Contact.module.scss";
// system tools
import React from "react";
// statics
import Icon from "./components/Icon";
import LinkedInIcon from "../../../../public/linkedin-svgrepo-com.svg";
import FacebookIcon from "../../../../public/facebook-svgrepo-com.svg";
import GitHubIcon from "../../../../public/github-svgrepo-com.svg";
import WhatsAppIcon from "../../../../public/whatsapp-whats-app-svgrepo-com.svg";
import EmailIcon from "../../../../public/email-address-svgrepo-com.svg";
import InstagramIcon from "../../../../public/instagram-1-svgrepo-com.svg";
import TitterIcon from "../../../../public/twitter-color-svgrepo-com.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={styles.iconsBox}>
      <div className={styles.noLinkIcons}>
        {/* <div>
          <Image
            className={styles.img}
            src={WhatsAppIcon}
            alt="WhatsApp icon"
          />
          <span>332-252-9630</span>
        </div> */}
        <div>
          <Image className={styles.img} src={EmailIcon} alt="Email icon" />
          <span>karin_ar72@hotmail.com</span>
        </div>
      </div>
      <Icon
        link="https://www.linkedin.com/in/kar%C3%ADn-arroyo-85a174174/"
        src={LinkedInIcon}
        alt="LinkedIn icon"
      />
      {/* <Icon
        link="https://www.facebook.com/profile.php?id=100009669095788"
        src={FacebookIcon}
        alt="Facebook icon"
      />
      <Icon
        link="https://www.instagram.com/karin_arroyo10/"
        src={InstagramIcon}
        alt="Instagram icon"
      /> */}
      <Icon
        link="https://github.com/karin210"
        src={GitHubIcon}
        alt="GitHub icon"
      />
      <Icon
        link="https://twitter.com/Karin_Arroyo10"
        src={TitterIcon}
        alt="Twitter icon"
      />
    </section>
  );
}
