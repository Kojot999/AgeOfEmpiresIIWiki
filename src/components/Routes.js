import Civilizations from "../Civilizations/Civilizations";
import Structures from "../Structures/Structures";
import Technologies from "../Technologies/Technologies";
import Units from "../Units/Units";
import List from "./components/Views/List/List";

export const ROUTES = [
  { name: "List", route: "/", component: List },
  { name: "Civilizations", route: "/civilizations", component: Civilizations },
  { name: "Structures", route: "/structures", component: Structures },
  { name: "Technologies", route: "/technologies", component: Technologies },
  { name: "Units", route: "/units", component: Units },
];
