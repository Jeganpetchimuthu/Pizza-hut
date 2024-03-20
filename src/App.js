import "./App.css";

import Header from "./Header";

import Register from "./Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import NonvegPizza from "./Navication/NonVegPizza";
import Pizzamania from "./Navication/Pizzamania";
import SpecilicityChicken from "./Navication/SpecilityChicken";
import Beverages from "./Navication/Beverages";
import Pizza from "./component/Pizza";
import Message from "./component/Message";

import CreatePizza from "./component/CreatePizza";
import Pay from "./Pay";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Header />} />
          <Route exact path="/nonveg" element={<NonvegPizza></NonvegPizza>} />
          <Route exact path="/pizzamania" element={<Pizzamania />} />
          <Route exact path="/chicken" element={<SpecilicityChicken />} />
          <Route exact path="/Beverages" element={<Beverages></Beverages>} />

          <Route exact path="/order" element={<Pizza></Pizza>} />
          <Route exact path="/add" element={<CreatePizza />} />
          <Route exact path="/mail" element={<Message />} />
          <Route exact path="/pay" element={<Pay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
