import React from "react";
import styles from "./TechnologiesItem.module.scss";
import { Collapse } from "react-collapse";
import { ICON } from "../../../../constants/config";

function TechnologiesItem({
  name,
  isOpened,
  id,
  action,
  description,
  age,
  expansion,
  cost,
}) {
  return (
    <div onClick={() => action(id)}>
      <h2>{name}</h2>
      <Collapse isOpened={isOpened}>
        <div className={styles.list}>
          <p className={styles.age}>
            Age: <img alt="" src={ICON[age]}></img>
          </p>
          <div className={styles.stats}>
            <p>{description}</p>
            <p>Expansion: {expansion}</p>
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
export default TechnologiesItem;
