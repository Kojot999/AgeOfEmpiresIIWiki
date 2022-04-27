import "./App.css";
import React from "react";
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
import Civilizations from "./components/Views/Civilizations/Civilizations";
import Structrues from "./components/Views/Structures/Structures";
import Units from "./components/Views/Units/Units";
import Technologies from "./components/Views/Technologies/Technologies";
import Button from "../src/components/BackButton/BackButton";

class App extends React.Component {
  state = {
    data: { civilizations, structures, units, technologies },
  };

  render() {
    return (
      <div className="App">
        <img alt="" className="background" src={background1}></img>
        <Router className="Components">
          <NavLink to="/" className="Header" />
          <Routes>
            <Route path="/" element={<List data={this.state.data} />} />
            <Route
              path="/structures"
              element={<Structrues data={this.state.data.structures} />}
            />
            <Route
              path="/civilizations"
              element={<Civilizations data={this.state.data.civilizations} />}
            />
            <Route
              path="/units"
              element={<Units data={this.state.data.units} />}
            />
            <Route
              path="/technologies"
              element={<Technologies data={this.state.data.technologies} />}
            />
          </Routes>
          <Button />
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
