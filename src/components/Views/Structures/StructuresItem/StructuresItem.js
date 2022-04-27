import React from "react";
import styles from "./StructuresItem.module.scss";
import { Collapse } from "react-collapse";
import { ICON } from "../../../../constants/config";

function StructuresItem({
  name,
  isOpened,
  id,
  action,
  age,
  hit_points,
  armor,
  cost,
}) {
  return (
    <div className={styles.Item} onClick={() => action(id)}>
      <h2>{name}</h2>
      <Collapse isOpened={isOpened}>
        <div className={styles.list}>
          <p className={styles.age}>
            Age: <img alt="" src={ICON[age]}></img>
          </p>
          <div className={styles.stats}>
            <p>Hit Points: {hit_points}</p>
            <p>Armor: {armor}</p>
          </div>
          <p className={styles.cost}>Cost: </p>
          <div className={styles.req}>
            {Object.keys(cost).map((resource) => (
              <div className={styles.resource}>
                <img alt={resource} src={ICON[resource]} /> {cost[resource]}
              </div>
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
}
export default StructuresItem;
