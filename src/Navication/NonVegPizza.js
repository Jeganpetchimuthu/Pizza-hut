import React from "react";
import "./NonVegPizza.css";
import image from "../Navication/image/img2.jpg";
import gourmet from "../Navication/image/mania1.jpg";
import capsicum from "../Navication/image/mania2.jpg";
import cheesy from "../Navication/image/mania3.jpg";
import vegloaded from "../Navication/image/mania4.jpg";
import tomato from "../Navication/image/mania5.jpg";
import { Link } from "react-router-dom";
import AssignmentReturnSharpIcon from "@mui/icons-material/AssignmentReturnSharp";
function NonvegPizza() {
  return (
    <div>
      <div>
        <h1 className="mai-heade">NON VEG PIZZA</h1>
        <AssignmentReturnSharpIcon />
      </div>
      <div className="container">
        <div>
          <span>
            <div className="NonvegPizza">
              <img src={image} alt="image"></img>
              <h1>KEEMA DO PYAZA</h1>
              <h5>
                Delicious minced chicken keema topped with crunchy onions on
                your favourite cheesy pizza
              </h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <span>
            <div className="NonvegPizza">
              <img src={gourmet} alt="image"></img>
              <h1>CHICKEN FIESTA</h1>
              <h5>
                Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum
              </h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <span>
            <div className="NonvegPizza">
              <img src={capsicum} alt="image"></img>
              <h1>PEPPER BARBECUE CHICKEN</h1>
              <h5>Pepper Barbecue Chicken I Cheese</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
        </div>
        <div>
          <span>
            <div className="NonvegPizza">
              <img src={cheesy} alt="image"></img>
              <h1>PEPPER BARBECUE & ONION</h1>
              <h5>Pepper Barbecue Chicken I Onion</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <span>
            <div className="NonvegPizza">
              <img src={vegloaded} alt="image"></img>
              <h1>CHICKEN SAUSAGE</h1>
              <h5>Chicken Sausage & Cheese</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <span>
            <div className="NonvegPizza">
              <img src={tomato} alt="image"></img>
              <h1>INDI CHICKEN TIKKA</h1>
              <h5>
                The wholesome flavour of tandoori masala with Chicken tikka I
                onion I red paprika I mint mayo
              </h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NonvegPizza;
