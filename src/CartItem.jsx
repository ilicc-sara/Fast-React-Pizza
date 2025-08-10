import {
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} from "./redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function CartItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return cart.map((item) => (
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
            <span className="amount">{item.amount}</span>
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
  ));
}

export default CartItem;
