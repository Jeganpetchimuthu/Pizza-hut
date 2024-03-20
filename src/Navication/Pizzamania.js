import "./Pizzamania.css";
import image from "../Navication/image/img2.jpg";
import gourmet from "../Navication/image/mania1.jpg";
import capsicum from "../Navication/image/mania2.jpg";
import cheesy from "../Navication/image/mania3.jpg";
import vegloaded from "../Navication/image/mania4.jpg";
import tomato from "../Navication/image/mania5.jpg";
import { Link } from "react-router-dom";
function Pizzamania() {
  return (
    <div>
      <div>
        <h1 className="mai-heade">PIZZA MANIA</h1>
        <span>
          <button>Back</button>
        </span>
      </div>
      <div className="container">
        <div>
          <span>
            <div className="pizzamania">
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
          <span>
            <div className="pizzamania">
              <img src={gourmet} alt="image"></img>
              <h1>PANEER & ONION</h1>
              <h5>PANEER & ONION</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <span>
            <div className="pizzamania">
              <img src={capsicum} alt="image"></img>
              <h1>CAPSICUM</h1>
              <h5>Capsicum</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
        </div>
        <div>
          <span>
            <div className="pizzamania">
              <img src={cheesy} alt="image"></img>
              <h1>CHEESY</h1>
              <h5>Orange Cheddar Cheese I Mozzarella</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <span>
            <div className="pizzamania">
              <img src={vegloaded} alt="image"></img>
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
          <span>
            <div className="pizzamania">
              <img src={tomato} alt="image"></img>
              <h1>TOMATO</h1>
              <h5>
                Juicy tomato in a flavourful combination with cheese I tangy
                sauce
              </h5>{" "}
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

export default Pizzamania;
