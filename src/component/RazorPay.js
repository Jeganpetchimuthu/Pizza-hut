// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [orderId, setOrderId] = useState("");
//   const [amount, setAmount] = useState(0);

//   const createOrder = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/create-order", {
//         amount: amount,
//       });
//       setOrderId(response.data.id);
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Razorpay Integration</h1>
//       <input
//         type="number"
//         placeholder="Enter amount in paise"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button onClick={createOrder}>Create Order</button>
//       {orderId && (
//         <div>
//           <h2>Order ID: {orderId}</h2>
//           {/* Add Razorpay checkout button here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import axios from "axios";

function RazorPay() {
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState(0);

  const createOrder = async () => {
    try {
      const response = await axios.post(
        "https://webcode-pizza.onrender.com/api/pay",
        {
          amount: amount,
        }
      );
      setOrderId(response.data.id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  return (
    <div className="App">
      <h1>Razorpay Integration</h1>
      <input
        type="number"
        placeholder="Enter amount in paise"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={createOrder}>Create Order</button>
      {orderId && (
        <div>
          <h2>Order ID: {orderId}</h2>
          {/* Add Razorpay checkout button here */}
        </div>
      )}
    </div>
  );
}

export default RazorPay;
