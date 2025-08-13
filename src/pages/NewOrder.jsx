import React from "react";
import { useSelector } from "react-redux";
import { priceSum } from "../redux/cartSlice";

function NewOrder() {
  const name = useSelector((state) => state.name);
  const sumPrice = useSelector((state) => priceSum(state));
  return (
    <section className="new-order-section">
      <p className="cart-heading">Ready to order? Let's go!</p>
      <form className="order-form">
        <div className="input-cont">
          <label>First Name</label>
          <input type="text" value={name.name} required />
        </div>
        <div className="input-cont">
          <label>Phone Number</label>
          <input type="tel" required />
        </div>
        <div className="input-cont">
          <label>Address</label>
          <input type="address" required />
        </div>

        <div className="priority-order">
          <input className="input-checkbox" type="checkbox" />
          <p>Want to give your order priority?</p>
        </div>

        <button className="order-btn btn">Order now for ${sumPrice}</button>
      </form>
    </section>
  );
}

export default NewOrder;
