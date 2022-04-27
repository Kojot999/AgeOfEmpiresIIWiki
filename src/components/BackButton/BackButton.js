import React from "react";
import styles from "./Button.module.scss";
import ButtonBackground from "../../img/Button.png";
import { NavLink, useLocation } from "react-router-dom";

function Button() {
  const { pathname } = useLocation();

  return pathname !== "/" ? (
    <NavLink to="/" className={styles.Button}>
      <img src={ButtonBackground} alt="" />
    </NavLink>
  ) : null;
}

export default Button;
