import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  return (
    <section className="cart-section">
      <Link to="/menu"> &larr; Back to menu</Link>
    </section>
  );
}

export default Cart;
