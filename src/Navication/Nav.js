import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-container">
      <span className="nav">
        <Link to="/nonveg" className="nav-bar1">
          <span className="nav-bar">
            <h5 className="pizzaName">NonvegPizza</h5>
          </span>
        </Link>
        <Link to="/pizzamania" className="nav-bar2">
          <span className="nav-bar">
            <h5 className="pizzaName">pizzamania</h5>
          </span>
        </Link>
        <Link to="/chicken" className="nav-bar3">
          <span className="nav-bar">
            <h5 className="pizzaName">SpecilicityChicken</h5>
          </span>
        </Link>
        <Link to="/beverages" className="nav-bar4">
          <span className="nav-bar">
            <h5 className="pizzaName">Beverages</h5>
          </span>
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
