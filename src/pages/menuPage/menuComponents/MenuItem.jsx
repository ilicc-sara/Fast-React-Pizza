import {
  addToCart,
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MenuItem(props) {
  const { soldOut, img, name, ingredients, price, id } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const itemIsInCart = cart.includes(cart.find((item) => item.id === id));

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
          <div className="amount-cont amount-menu">
            <div className="amount-btns">
              <button
                onClick={() => dispatch(decreaseAmount({ id: id }))}
                className="btn decrease-btn"
              >
                -
              </button>
              <span className="amount">
                {cart.find((item) => item.id === id).amount}
              </span>
              <button
                onClick={() => dispatch(increaseAmount({ id: id }))}
                className="btn increase-btn"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(deleteCartItem({ id: id }))}
              className="btn delete-btn"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {!itemIsInCart ? (
        <button
          className={`btn ${soldOut ? "hidden" : "add-btn"}`}
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
