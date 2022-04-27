import React from "react";
import styles from "./List.module.scss";
import buildings from "../../../img/buildings.png";
import civs from "../../../img/civs.png";
import techs from "../../../img/techs.png";
import unit from "../../../img/units.png";
import { NavLink } from "react-router-dom";

function List({ data }) {
  const { civilizations, units, technologies, structrues } = data;
  const items = [
    {
      ...civilizations,
      image: civs,
      name: "civilizations",
      path: "/civilizations",
    },
    { ...units, image: unit, name: "units", path: "/units" },
    {
      ...technologies,
      image: techs,
      name: "technologies",
      path: "/technologies",
    },
    {
      ...structrues,
      image: buildings,
      name: "structrues",
      path: "/structures",
    },
  ];

  return (
    <div className={styles.list}>
      {items.map(({ name, image, path }, index) => (
        <NavLink to={path} key={index}>
          <img alt="" src={image} />
          <h1>{name}</h1>
        </NavLink>
      ))}
    </div>
  );
}

export default List;
