import React, { useState } from "react";
import styles from "./Units.module.scss";
import UnitsItem from "./UnitsItem/UnitsItem";

export const Units = ({ data }) => {
  const [currentlyOpenedUnit, setCurrentlyOpenedUnit] = useState(null);

  const handleClick = (id) => {
    if (currentlyOpenedUnit === id) {
      setCurrentlyOpenedUnit(null);
    } else setCurrentlyOpenedUnit(id);
  };

  return (
    <div className={styles.Units}>
      {data.units.map((item) => (
        <UnitsItem
          isOpened={currentlyOpenedUnit === item.id}
          {...item}
          key={item.id}
          action={handleClick}
        />
      ))}
    </div>
  );
};
