import React, { useState } from "react";
import styles from "./Civilizations.module.scss";
import { CivilizationsItem } from "./CivilizationsItem/CivilizationsItem";

export const Civilizations = ({ data }) => {
  const [currentlyOpenedUnit, setCurrentlyOpenedUnit] = useState(null);

  const handleClick = (id) => {
    if (currentlyOpenedUnit === id) {
      setCurrentlyOpenedUnit(null);
    } else setCurrentlyOpenedUnit(id);
  };

  return (
    <div className={styles.Civilizations}>
      {data.civilizations.map((item) => (
        <CivilizationsItem
          isOpened={currentlyOpenedUnit === item.id}
          {...item}
          key={item.id}
          action={handleClick}
        />
      ))}
    </div>
  );
};
