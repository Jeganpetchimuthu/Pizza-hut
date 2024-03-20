import "./Beverages.css";
import lemon from "../Navication/image/7up.png";
import pepsi from "../Navication/image/pepsi.png";
import pepsi_black from "../Navication/image/pepsi_black.png";
import lipton from "../Navication/image/lipton.png";
import { Link } from "react-router-dom";
function Beverages() {
  return (
    <div>
      <div>
        <h1 className="mai-heade">BEVERAGES</h1>
      </div>
      <div className="container">
        <div>
          <span>
            <div className="Beverages">
              <img src={lemon} alt="image"></img>
              <h1> 7UP (500ML)</h1>

              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <br></br>
          <span>
            <div className="Beverages">
              <img src={pepsi} alt="image"></img>
              <h1>PEPSI (500ML)</h1>

              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>
          <br />
          <span>
            <div className="Beverages">
              <img src={pepsi_black} alt="image"></img>
              <h1>PEPSI BLACK CAN</h1>
              <h5>PEPSI BLACK CAN</h5>
              <Link to="/order">
                <button className="order-btn">ORDER NOW</button>
              </Link>
            </div>
          </span>

          <div>
            <span>
              <div className="Beverages">
                <img src={lipton} alt="image"></img>
                <h1>LIPTON ICE TEA (250ML)</h1>
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

export default Beverages;
