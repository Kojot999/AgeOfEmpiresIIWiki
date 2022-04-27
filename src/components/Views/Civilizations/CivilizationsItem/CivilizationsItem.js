import React from "react";
import styles from "./CivilizationsItem.module.scss";
import { Collapse } from "react-collapse";

function CivilizationsItem({
  name,
  isOpened,
  id,
  action,
  team_bonus,
  civilization_bonus,
}) {
  return (
    <div className={styles.Item} onClick={() => action(id)}>
      <h2>{name}</h2>
      <Collapse isOpened={isOpened}>
        <div className={styles.list}>
          <p>{team_bonus}</p>
          <div className={styles.stats}>
            {civilization_bonus.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
}
export default CivilizationsItem;
