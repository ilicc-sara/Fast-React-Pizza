import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { priceSum, amountSum } from "../redux/cartSlice";

function FooterCart() {
  const sumPrice = useSelector((state) => priceSum(state));
  const sumAmount = useSelector((state) => amountSum(state));
  return (
    <footer className="footer-cart">
      <div className="cart-info">
        <p>{sumAmount}</p>
        <p>${sumPrice}</p>
      </div>
      <Link to="/cart" className="open-cart">
        Open Cart &rarr;
      </Link>
    </footer>
  );
}

export default FooterCart;
