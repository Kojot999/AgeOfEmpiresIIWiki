import React, { useState } from "react";
import styles from "./Technologies.module.scss";
import TechnologiesItem from "./TechnologiesItem/TechnologiesItem";

export const Technologies = ({ data }) => {
  const [currentlyOpenedUnit, setCurrentlyOpenedUnit] = useState(null);

  const handleClick = (id) => {
    if (currentlyOpenedUnit === id) {
      setCurrentlyOpenedUnit(null);
    } else setCurrentlyOpenedUnit(id);
  };

  return (
    <div className={styles.Technologies}>
      {data.technologies.map((item) => (
        <TechnologiesItem
          isOpened={currentlyOpenedUnit === item.id}
          {...item}
          key={item.id}
          action={handleClick}
        />
      ))}
    </div>
  );
};
