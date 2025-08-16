import React from "react";
import { useSelector } from "react-redux";

function OrderFinal() {
  const cart = useSelector((state) => state.cart);

  return (
    <section className="section-final">
      <div className="order-num-cont">
        <p className="cart-heading">Order #J454MM4L4C164 status</p>{" "}
        <div className="preparing-order">Preparing order</div>
      </div>
      <div className="delivery-time-cont">
        <p>Only 40 minutes left 😃</p>
        <p>(Estimated delivery: Aug 13, 07:57 PM)</p>
      </div>
      <ul className="final-order-list">
        {cart.map((item, index) => (
          <li key={index} className="final-order-item">
            {item.amount} &times; {item.title}
            <span>${(item.price * item.amount).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="final-price-cont">
        <p>Price pizza: $59.00</p>
        <p>To pay on delivery: $59.00</p>
      </div>
    </section>
  );
}

export default OrderFinal;
