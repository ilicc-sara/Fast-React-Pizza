import React, { useState } from "react";
import { useSelector } from "react-redux";
import { priceSum } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function NewOrder() {
  const name = useSelector((state) => state.name);
  const sumPrice = useSelector((state) => priceSum(state));
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState(name.name);
  const [telValue, setTelValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [priority, setPriority] = useState(false);

  const newOrder = {
    address: addressValue,
    cart: cart,
    createdAt: "2025-08-16T21:05:25.813Z",
    customer: nameValue,
    estimatedDelivery: "2025-08-16T22:12:25.813Z",
    orderPrice: sumPrice,
    phone: telValue,
    position: "",
    priority: priority,
    priorityPrice: sumPrice + sumPrice / 20,
    status: "preparing",
  };
  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://react-fast-pizza-api.onrender.com/api/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newOrder),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.log(data.description);
        return;
      }
      console.log(data);
      navigate(`/order/${data.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  function submitForm(e) {
    e.preventDefault();
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
          <input
            className="input-checkbox"
            type="checkbox"
            checked={priority}
            onChange={(e) => setPriority(e.target.checked)}
          />
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
