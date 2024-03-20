import React, { useState } from "react";
import "./CreatePizza.css";
import axios from "axios";

function CreatePizza() {
  const [pizza, setPizza] = useState({
    roll: "",
    pizza: "",
    sauce: "",
    cheese: "",
    veggies: "",
    meat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPizza({ ...pizza, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://webcode-pizza.onrender.com/pizza/create",
        pizza
      );
      console.log(pizza);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="create-container">
      <h1>Create Your Order</h1>
      <div className="main-container">
        <span className="form-container">
          <label className="content-container">roll:</label>
          <input
            className="value-container"
            type="text"
            name="roll"
            placeholder="Enter your prouct"
            value={pizza.roll}
            onChange={handleChange}
          />

          <br></br>
        </span>
        <span className="form-container">
          <label className="content-container">
            pizza:
            <input
              className="value-container"
              type="text"
              name="pizza"
              placeholder="Enter your prouct"
              value={pizza.pizza}
              onChange={handleChange}
            />
          </label>
          <br></br>
        </span>

        <span className="form-container">
          <label className="content-container">
            sauce:
            <input
              className="value-container"
              type="text"
              name="sauce"
              placeholder="Enter your prouct"
              value={pizza.sauce}
              onChange={handleChange}
            />
          </label>
          <br></br>
        </span>

        <span className="form-container">
          <label className="content-container">
            cheese:
            <input
              className="value-container"
              type="text"
              name="cheese"
              placeholder="Enter your prouct"
              value={pizza.cheese}
              onChange={handleChange}
            />
          </label>
          <br></br>
        </span>

        <span className="form-container">
          <label className="content-container">
            veggies:
            <input
              className="value-container"
              type="text"
              name="veggies"
              placeholder="Enter your prouct"
              value={pizza.veggies}
              onChange={handleChange}
            />
          </label>
          <br></br>
        </span>

        <span className="form-container">
          <label className="content-container">
            meat:
            <input
              className="value-container"
              type="text"
              name="meat"
              placeholder="Enter your prouct"
              value={pizza.meat}
              onChange={handleChange}
            />
          </label>

          <br></br>
          <button className="add-button" type="submit" onClick={handleSubmit}>
            Add
          </button>
          <br></br>
        </span>
      </div>
    </div>
  );
}

export default CreatePizza;
