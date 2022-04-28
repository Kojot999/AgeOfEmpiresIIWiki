import "./App.css";
import React, { useState } from "react";
import List from "./components/Views/List/List";
import civilizations from "./data/civilizations.json";
import structures from "./data/structures.json";
import units from "./data/units.json";
import technologies from "./data/technologies.json";
import background1 from "./img/background1.png";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Civilizations } from "./components/Views/Civilizations/Civilizations";
import { Structrues } from "./components/Views/Structures/Structures";
import { Units } from "./components/Views/Units/Units";
import { Technologies } from "./components/Views/Technologies/Technologies";
import Button from "../src/components/BackButton/BackButton";

export const App = () => {
  const [data] = useState({
    civilizations,
    structures,
    units,
    technologies,
  });

  return (
    <div className="App">
      <img alt="" className="background" src={background1}></img>
      <Router className="Components">
        <NavLink to="/" className="Header" />
        <Routes>
          <Route path="/" element={<List data={data} />} />
          <Route
            path="/structures"
            element={<Structrues data={data.structures} />}
          />
          <Route
            path="/civilizations"
            element={<Civilizations data={data.civilizations} />}
          />
          <Route path="/units" element={<Units data={data.units} />} />
          <Route
            path="/technologies"
            element={<Technologies data={data.technologies} />}
          />
        </Routes>
        <Button />
      </Router>
      <Footer />
    </div>
  );
};
