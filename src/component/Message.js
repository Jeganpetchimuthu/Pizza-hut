import React, { useState } from "react";
import axios from "axios";
import "./Message.css";

function Message() {
  const [formData, setFormData] = useState({
    productName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-1-b16d.onrender.com/api/mails",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className="mail">
        <h1 className="heading">DOMINO PIZZA DELIVERY</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="product">product Name:</label>

            <input
              className="Product"
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="phone">Phone Number:</label>
            <input
              className="Phone"
              type="number"
              name="phoneNumber"
              placeholder="Enter Your Number"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mailemail">Email:</label>
            <input
              className="mailEmail"
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br></br>

          <div>
            <label className="messagelab">Message:</label>
            <textarea
              className="Messagea"
              type="text"
              name="message"
              placeholder="Type Here"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="send" type="submit">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

export default Message;
// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/send-email", formData);
//       alert("Email sent successfully");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email");
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="tel"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//         <button type="submit">Send Email</button>
//       </form>
//     </div>
//   );
// }

// export default App;
