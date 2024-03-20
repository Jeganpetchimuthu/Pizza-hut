import React from "react";
import "./Specilicity.css";
import image from "./image/img4.jpg";
import gourmet from "./image/img2.jpg";
import capsicum from "./image/img3.jpg";
import cheesy from "./image/img4.jpg";
import { Link } from "react-router-dom";
function SpecilityChicken() {
  return (
    <div>
      <div>
        <h1 className="mai-heade">SPECILICITY CHICKEN</h1>
      </div>
      <div className="container">
        <div>
          <span>
            <div className="SpecilicityChicken">
              <img src={image} alt="image"></img>
              <h1>VEG LOADED</h1>
              <h5>
                Tomato | Grilled Mushroom |Jalapeno |Golden Corn | Beans in a
                fresh pan crust
              </h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <br></br>
          <span>
            <div className="SpecilicityChicken">
              <img src={gourmet} alt="image"></img>
              <h1>PANEER & ONION</h1>
              <h5>PANEER & ONION</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <br />
          <span>
            <div className="SpecilicityChicken">
              <img src={capsicum} alt="image"></img>
              <h1>CAPSICUM</h1>
              <h5>Capsicum</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>

          <div>
            <span>
              <div className="SpecilicityChicken">
                <img src={cheesy} alt="image"></img>
                <h1>CHEESY</h1>
                <h5>Orange Cheddar Cheese I Mozzarella</h5>
                <Link to="/order">
                  <button className="order-btn">ORDER NOW</button>
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecilityChicken;
