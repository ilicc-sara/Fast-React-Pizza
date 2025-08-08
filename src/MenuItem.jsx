import React from "react";
import {
  addToCart,
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} from "./redux/slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MenuItem(props) {
  const { soldOut, img, name, ingredients, price, id } = props;
  const dispatch = useDispatch();
  const info = useSelector((state) => state.name);

  const itemIsInCart = info.cart.includes(
    info.cart.find((item) => item.id === id)
  );

  return (
    <li className="menu-item">
      <img className={`${soldOut ? "sold-out" : ""} img-item`} src={`${img}`} />
      <div className="info-text">
        <p className="pizza-name">{name}</p>
        <p className="pizza-ingredients">
          {ingredients
            .map((ing) => ing[0].toUpperCase() + ing.slice(1))
            .join(", ")}
        </p>

        {!itemIsInCart ? (
          <p className="pizza-price">
            {soldOut ? (
              <span className="sold-out-span">SOLD OUT</span>
            ) : (
              `$ ${price.toFixed(2)}`
            )}
          </p>
        ) : (
          <div className="amount-cont">
            <div className="amount-btns">
              <button
                onClick={() => dispatch(decreaseAmount({ id: id }))}
                className="decrease-btn"
              >
                -
              </button>
              <span className="amount">
                {info.cart.find((item) => item.id === id).amount}
              </span>
              <button
                onClick={() => dispatch(increaseAmount({ id: id }))}
                className="increase-btn"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(deleteCartItem({ id: id }))}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {!itemIsInCart ? (
        <button
          className={`${soldOut ? "hidden" : "add-btn"}`}
          onClick={() =>
            dispatch(addToCart({ title: name, price: price, id: id }))
          }
        >
          Add to Cart
        </button>
      ) : (
        <p className="pizza-price-second">$ {price.toFixed(2)}</p>
      )}
    </li>
  );
}

export default MenuItem;
