import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { priceSum } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

function NewOrder() {
  const name = useSelector((state) => state.name);
  const sumPrice = useSelector((state) => priceSum(state));
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState(name.name);
  const [telValue, setTelValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  function generateCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const newUser = {
    username: nameValue,
    number: telValue,
    address: addressValue,
    orderCode: generateCode(),
  };

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://react-fast-pizza-api.onrender.com/api/order/${newUser.orderCode}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );
      const posts = await response.json();
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  function submitForm(e) {
    e.preventDefault();
    // navigate("/order/1111");
    fetchPost();
  }
  return (
    <section className="new-order-section">
      <p className="cart-heading">Ready to order? Let's go!</p>
      <form onSubmit={submitForm} className="order-form">
        <div className="input-cont">
          <label>First Name</label>
          <input
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.targetValue)}
            required
          />
        </div>
        <div className="input-cont">
          <label>Phone Number</label>
          <input
            type="tel"
            value={telValue}
            onChange={(e) => setTelValue(e.target.value)}
            required
          />
        </div>
        <div className="input-cont">
          <label>Address</label>
          <input
            type="text"
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
            required
          />
        </div>

        <div className="priority-order">
          <input className="input-checkbox" type="checkbox" />
          <p>Want to give your order priority?</p>
        </div>

        <button type="submit" className="order-btn btn">
          Order now for ${sumPrice}
        </button>
      </form>
    </section>
  );
}

export default NewOrder;
