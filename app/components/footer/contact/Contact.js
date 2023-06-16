import React from "react";
import Icon from "./components/Icon";
import LinkedInIcon from "../../../../public/linkedin-svgrepo-com.svg";
import FacebookIcon from "../../../../public/facebook-svgrepo-com.svg";
import GitHubIcon from "../../../../public/github-svgrepo-com.svg";
import WhatsAppIcon from "../../../../public/whatsapp-whats-app-svgrepo-com.svg";
import EmailIcon from "../../../../public/email-address-svgrepo-com.svg";
import styles from "./styles/Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.iconsBox}>
      <Icon
        link="https://www.linkedin.com/in/kar%C3%ADn-arroyo-85a174174/"
        src={LinkedInIcon}
        alt="LinkedIn icon"
      />
      <Icon
        link="https://www.facebook.com/profile.php?id=100009669095788"
        src={FacebookIcon}
        alt="Facebook icon"
      />
      <Icon
        link="https://github.com/karin210"
        src={GitHubIcon}
        alt="GitHub icon"
      />
      <div className={styles.noLinkIcons}>
        <div>
          <Icon link="_blank" src={WhatsAppIcon} alt="WhatsApp icon" />
          <span>332-252-9630</span>
        </div>
        <div>
          <Icon link="_blank" src={EmailIcon} alt="Email icon" />
          <span>karin_ar72@hotmail.com</span>
        </div>
      </div>
    </section>
  );
}
