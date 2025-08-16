import {
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function CartItem() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return cart.map((item, index) => (
    <article key={index} className="cart-article">
      <p>
        {item.quantity} &times; {item.name}
      </p>

      <div className="amount-price">
        <p>${item.totalPrice.toFixed(2)}</p>

        <div className="amount-cont">
          <div className="amount-btns">
            <button
              onClick={() => dispatch(decreaseAmount({ id: item.pizzaId }))}
              className="btn decrease-btn"
            >
              -
            </button>
            <span className="amount">{item.quantity}</span>
            <button
              onClick={() => dispatch(increaseAmount({ id: item.pizzaId }))}
              className="btn increase-btn"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(deleteCartItem({ id: item.pizzaId }))}
            className="btn delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  ));
}

export default CartItem;
