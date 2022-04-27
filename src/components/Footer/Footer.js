import React from "react";
import styles from "./footer.module.scss";
import FooterBackground from "../../img/FooterBackground.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <img alt="" src={FooterBackground} />
      <div>
        <h1>Encyklopedia Age of Empires II</h1>
        <p>Przygotowana Przez Zespół EmesClick.com</p>
      </div>
    </div>
  );
}

export default Footer;
