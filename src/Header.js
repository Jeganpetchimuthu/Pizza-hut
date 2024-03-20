import React from "react";
import "./Header.css";
import Nav from "./Navication/Nav";
import Home from "./Home";

function Header() {
  return (
    <div className="Header">
      <span className="User">
        <span>
          <h1 className="User1">Domino's Pizza-Food Delivery</h1>
          <Nav />
          <Home />
        </span>
      </span>
    </div>
  );
}

export default Header;
