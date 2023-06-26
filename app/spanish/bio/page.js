// css
import styles from "./styles/BioPage.module.scss";
// system components
import Image from "next/image";
import React from "react";
// UI components
import Bio from "../../components/bioPage/BioPage";
import TextBlock from "../../components/bioPage/components/textBlock";

export default function BioPage() {
  return (
    <>
      <Bio stackH2="Stack_Tecnológico">
        <TextBlock
          textClassOpen={styles.textOpen1}
          textClassClosed={styles.textClosed1}
          h="¿Cómo_aprendí_código?"
          body="Empecé en el desarrollo web con ayuda de un amigo en
        Guadalajara quien me enseño algunas bases de desarrollo frontend. Mis principales habilidades las aprendí gracias a sitios como w3schools.com,
        developer.mozilla.org, la documetación oficial de tecnologías como React y Next.js, y algunos canales de YouTube sobre programación. Hice algunos cursos en la plataforma de freecodecamp.org también."
        />
        <TextBlock
          textClassOpen={styles.textOpen2}
          textClassClosed={styles.textClosed2}
          h="¿Por_qué_desarrollo_web?"
          body="No sabía qué campos podía abordar en programación, Solo quería entrar en la industria tecnológica. Había leído sobre algunas de las empresas más grandes e innovadoras del mundo como Google,
          Facebook, Amazon etc. Aprendí que la razón principal por la que son tan grandes es porque están basadas en software y tienen un increíble potencial de crecimiento.
          Había escuchado que trabajar en tecnología era diferente a las otras industrias y pensé que trabajar en compañías tan grandes sería genial.
          Pensé que la primera cosa que tenía que hacer era aprender a contruir un sitio web, encontré varias herramientas como Wix y WordPress
          pero lo que quería era aprender a escribir el código. Finalmente encontré que debía aprender HTML, CSS y JavaScript para hacer el sitio, consulté a un amigo desarrollador y me habló de cómo era trabajar en Tech, instaló Ubuntu en mi laptop y me ayudó a iniciar en el mundo del desarrollo web."
        />
        <TextBlock
          textClassOpen={styles.textOpen3}
          textClassClosed={styles.textClosed3}
          h="¿Por_qué_React?"
          body="Me dí cuenta de que no era posible escribir código complejo y aplicaciones web fáciles de mantener solo con Vanilla JavaScript. Mi amigo pensó que una buena herramienta para comenzar a hacer aplicaciones web era React, entonces investigué acerca de frameworks y librerías. Svelte fué otra opción que mi amigo me suguirió, pero React es más popular, además está respaldado por Meta, tiene una comunidad muy grande y bastantes herramientas de terceros para trabajar, así que la elegí."
        />
      </Bio>
    </>
  );
}
