import React, { useState } from "react";
import "./Register.css";
//import Image from "./img/pizza-hut.jpg";
import axios from "axios";
//import Img from "./img/img9.png";
import { Link } from "react-router-dom";
export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("fill the form");
      return;
    }

    const response = await axios.post(
      "https://webcode-pizza.onrender.com/api/register",
      {
        firstName,
        lastName,
        email,
        password,
      }
    );
    console.log(response);

    if (response.status === 200) {
      alert("user create sucessfully");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } else {
      alert("user already exist");
    }
  };
  return (
    <div className="register-wrap">
      <span className="registerinfo">
        <img
          className=" domioimg"
          src="data:image/png;base64,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"
          alt="img"
        ></img>
      </span>
      <form className="register-cantaine" onClick={handleSubmit}>
        <h2 className="header-pages">Register User</h2>
        <p className="paras">Please Enter you Email and password</p>

        <input
          className="name"
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          className="lname"
          type="text"
          name="lastName"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          className="emails"
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          className="pas"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>

        <br></br>
        <Link to="/login">
          <button className="subbutton" type="submit">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
