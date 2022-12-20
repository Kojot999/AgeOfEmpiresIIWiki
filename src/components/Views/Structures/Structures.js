import React, { useState } from "react";
import styles from "./Structures.module.scss";
import { StructuresItem } from "./StructuresItem/StructuresItem";

export const Structrues = ({ data }) => {
  const [currentlyOpenedUnit, setCurrentlyOpenedUnit] = useState(null);

  const handleClick = (id) => {
    if (currentlyOpenedUnit === id) {
      setCurrentlyOpenedUnit(null);
    } else setCurrentlyOpenedUnit(id);
  };

  return (
    <div className={styles.Structrues}>
      {data.structures.map((item) => (
        <StructuresItem
          isOpened={currentlyOpenedUnit === item.id}
          {...item}
          key={item.id}
          action={handleClick}
        />
      ))}
    </div>
  );
};
