// export function getPizzaAPI() {
//   return fetch("http://localhost:3000/pizza")
//     .then((res) => res.json())
//     .then((data) => data);
// }

import axios from "axios";

// export function addPizzaApi(pizza) {
//   return fetch("http://localhost:3000/pizza", {
//     method: "POST",
//     headers: {
//       "content-Type": "application-json",
//     },
//     body: JSON.stringify(pizza),
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// }
// export function updatePizzaApi(pizza) {
//   return fetch(`http://localhost:3000/pizza/${pizza._id}`, {
//     method: "PATCH",
//     headers: {
//       "content-Type": "application-json",
//     },
//     body: JSON.stringify(pizza),
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// }
export function deletePizzaApi(id) {
  return axios(`https://webcode-pizza.onrender.com/pizza/${id}`, {
    method: "DELETE",
    headers: {
      "content-Type": "application-json",
    },
    body: JSON.stringify(id),
  })
    .then((res) => res.json())
    .then((data) => data);
}
