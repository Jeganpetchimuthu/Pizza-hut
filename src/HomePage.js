import Home from "./Home";
import Header from "./Header";

import Nav from "./Navication/Nav";

import { Link } from "react-router-dom";

import React from "react";

function HomePage() {
  return (
    <div>
      <Link to="/homepage">{<Header />}</Link>
      <Link to="/homepage">{<Nav />}</Link>
      <Link to="/homepage">{<Home />}</Link>

      {/* <Router>
        <Routes>
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/nav" element={<Nav />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default HomePage;
