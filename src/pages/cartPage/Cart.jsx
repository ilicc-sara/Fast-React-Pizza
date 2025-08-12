import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./cartComponents/CartItem";
import { clearCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import FooterCart from "../../components/FooterCart";

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
        <CartItem />
      </div>

      <div className="cart-btns">
        <Link to="/order/new">
          <button className="btn order-btn">Order pizzas</button>
        </Link>
        <button className="clear-btn" onClick={() => dispatch(clearCart())}>
          Clear cart
        </button>
      </div>
      {cart.length !== 0 && <FooterCart />}
    </section>
  );
}

export default Cart;
