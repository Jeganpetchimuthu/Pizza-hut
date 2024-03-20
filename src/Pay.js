import React, { useState } from "react";
import "./Pay.css";
function Pay() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount === "") {
      alert("please Enter Amount");
    } else {
      var options = {
        key: "rzp_test_U8ydfTO3lKG6zN",
        key_secret: "rzp_test_U8ydfTO3lKG6zN",
        amount: amount * 100,
        currency: "INR",
        name: "Domino Pizza Delivery",
        description: "For Delivery purpuse",

        handler: function (res) {
          alert(res.razorpay_payment_id);
        },
        prefill: {
          name: "jegan",
          email: "arunjegan1996@gmail.com",
          contact: "9876543210",
        },
        notes: {
          address: "Domino Pizza App",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div className="pay">
      <h2 className="payHead">Domino Pizza Delivery</h2>
      <br></br>
      <input
        className="rezolpay"
        type="text"
        placeholder="Enter Your Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <br></br>

      <button className="paySubmitted" type="submit" onClick={handleSubmit}>
        Pay Now
      </button>
    </div>
  );
}

export default Pay;
