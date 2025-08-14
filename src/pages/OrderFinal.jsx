import React from "react";
import { useSelector } from "react-redux";

function OrderFinal() {
  const cart = useSelector((state) => state.cart);

  function generateCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  console.log(generateCode());
  return (
    <section className="section-final">
      <div className="order-num-cont">
        <p className="cart-heading">Order #{generateCode()} status</p>{" "}
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
