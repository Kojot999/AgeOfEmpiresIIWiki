import React from "react";
import styles from "./footer.module.scss";
import FooterBackground from "../../img/FooterBackground.png";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className={styles.footer}>
      <img alt="" src={FooterBackground} />
      <div>
        <h1>Encyklopedia Age of Empires II</h1>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default Footer;
