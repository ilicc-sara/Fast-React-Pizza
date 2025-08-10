import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";

function Cart() {
  const name = useSelector((state) => state.name);

  return (
    <section className="cart-section">
      <Link to="/menu" className="menu-link">
        &larr; Back to menu
      </Link>

      <div className="cart-cont">
        <p className="cart-heading">Your cart, {name.name}</p>
        <CartItem />
      </div>
    </section>
  );
}

export default Cart;
