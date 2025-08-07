import React from "react";
import { addToCart } from "./redux/slice";
import { useDispatch } from "react-redux";

function MenuItem(props) {
  const { soldOut, img, name, ingredients, price } = props;
  const dispatch = useDispatch();

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

        <p className="pizza-prize">
          {soldOut ? (
            <span className="sold-out-span">SOLD OUT</span>
          ) : (
            `$ ${price.toFixed(2)}`
          )}
        </p>
      </div>

      <button
        className={`${soldOut ? "hidden" : "add-btn"}`}
        onClick={() => dispatch(addToCart({ title: name, price: price }))}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default MenuItem;
