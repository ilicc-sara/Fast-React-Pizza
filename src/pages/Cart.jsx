import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const name = useSelector((state) => state.name);
  return (
    <section className="cart-section">
      <Link to="/menu" className="menu-link">
        &larr; Back to menu
      </Link>

      <div>
        <p className="cart-heading">Your cart, {name.name}</p>
      </div>
    </section>
  );
}

export default Cart;
