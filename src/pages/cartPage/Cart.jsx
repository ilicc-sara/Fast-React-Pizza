import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./cartComponents/CartItem";
import { clearCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import FooterCart from "../../components/FooterCart";
import Button from "../../components/Button";

function Cart() {
  const name = useSelector((state) => state.name.name);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart-section">
      <Link to="/menu" className="menu-link">
        &larr; Back to menu
      </Link>

      {cart.length === 0 && (
        <p className="cart-heading">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      )}

      {cart.length !== 0 && (
        <>
          <div className="cart-cont">
            <p className="cart-heading">Your cart, {name}</p>
            <CartItem />
          </div>

          <div className="cart-btns">
            <Link to="/order/new">
              <Button variation="order" type="submit">
                Order pizzas
              </Button>
            </Link>

            <Button
              variation="clear"
              type="submit"
              handleClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          </div>
        </>
      )}
      {cart.length !== 0 && <FooterCart />}
    </section>
  );
}

export default Cart;
