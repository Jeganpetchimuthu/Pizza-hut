import React, { useEffect, useState } from "react";
import CreatePizza from "./component/CreatePizza";
import Pizza from "./component/Pizza";
import {
  getPizzaAPI,
  addPizzaApi,
  updatePizzaApi,
  deletePizzaApi,
} from "./api/pizzas";

function Order() {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getPizzaAPI().then((pizza) => setPizza(pizza));
  }, []);

  const addpizza = (pizza) => {
    return addPizzaApi(pizza).then((data) => {
      setPizza([...pizza, data]);
    });
  };
  const updatepizza = (pizza) => {
    return updatePizzaApi(pizza).then((data) => {
      return data;
    });
  };
  const deletepizza = (id) => {
    return deletePizzaApi(id).then((data) => {
      if (data.deleteCount === 1) {
        setPizza(pizza.filter(id._id !== id));
      }
    });
  };
  return (
    <div className="App">
      <CreatePizza onCreate={addpizza}></CreatePizza>
      <Pizza
        pizza={pizza}
        onDelete={deletepizza}
        onUpdate={updatepizza}
      ></Pizza>
    </div>
  );
}

export default Order;
