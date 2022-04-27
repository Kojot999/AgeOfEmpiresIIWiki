import React from "react";
import styles from "./UnitsItem.module.scss";
import { Collapse } from "react-collapse";
import { ICON } from "../../../../constants/config";

function UnitsItem({
  name,
  description,
  isOpened,
  id,
  action,
  attack,
  armor,
  hit_points,
  cost,
  age,
}) {
  return (
    <div onClick={() => action(id)}>
      <h2>{name}</h2>
      <Collapse isOpened={isOpened}>
        <div className={styles.list}>
          <p className={styles.age}>
            Age: <img alt="" src={ICON[age]}></img>
          </p>
          <p>{description}</p>
          <div className={styles.stats}>
            <p>Attack: {attack}</p>
            <p>Armor: {armor}</p>
            <p>Hit Points: {hit_points}</p>
          </div>
          {cost?.Cost !== "No cost" && <p className={styles.cost}>Cost: </p>}
          {cost?.Provides && <p className={styles.provide}>Provide: </p>}
          <div className={styles.req}>
            {cost?.Cost !== "No cost"
              ? Object.keys(cost).map((resource) => (
                  <div className={styles.resource}>
                    <img alt={resource} src={ICON[resource]} /> {cost[resource]}
                  </div>
                ))
              : cost?.Provides
              ? Object.keys(cost.Provides).map((resource) => (
                  <div className={styles.resource}>
                    <img alt={resource} src={ICON[resource]} />{" "}
                    {cost.Provides[resource]}
                  </div>
                ))
              : null}
          </div>
        </div>
      </Collapse>
    </div>
  );
}
export default UnitsItem;
