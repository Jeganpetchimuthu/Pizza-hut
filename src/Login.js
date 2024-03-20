import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
//import pizza from "./img/img5.jpg";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://webcode-pizza.onrender.com/api/auth",
        formData
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="LoginWrop-container">
      <img
        className="pizzaLogin"
        src="https://png.pngtree.com/png-vector/20230329/ourmid/pngtree-delicious-pizza-png-image_6656197.png"
        alt="pizzaimg"
      ></img>
      <form className="login-cantaine-wrap" onClick={handleSubmit}>
        <h2 className="header-page">User Login</h2>
        <p className="para">Please Enter you Email and Password</p>

        <input
          className="logEmail"
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <input
          className="LogPassword"
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        ></input>

        <br></br>
        <br></br>
        <Link to="/home">
          <button className="logbutton">Login</button>
          <br></br>
        </Link>
        <br></br>
      </form>
    </div>
  );
}
