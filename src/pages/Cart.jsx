import React from "react";
import {
  addToCart,
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Cart() {
  const name = useSelector((state) => state.name);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <section className="cart-section">
      <Link to="/menu" className="menu-link">
        &larr; Back to menu
      </Link>

      <div className="cart-cont">
        <p className="cart-heading">Your cart, {name.name}</p>
        {cart.map((item) => (
          <article className="cart-article">
            <p>
              {item.amount} &times; {item.title}
            </p>

            <div className="amount-price">
              <p>${(item.amount * item.price).toFixed(2)}</p>

              <div className="amount-cont">
                <div className="amount-btns">
                  <button
                    onClick={() => dispatch(decreaseAmount({ id: item.id }))}
                    className="decrease-btn"
                  >
                    -
                  </button>
                  <span className="amount">
                    {/* {cart.find((item) => item.id === id).amount} */}
                    {item.amount}
                  </span>
                  <button
                    onClick={() => dispatch(increaseAmount({ id: item.id }))}
                    className="increase-btn"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(deleteCartItem({ id: item.id }))}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cart;
