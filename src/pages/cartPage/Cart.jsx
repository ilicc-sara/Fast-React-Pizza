import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { cartIsEmpty } from "../../redux/cartSlice";
import CartItem from "./cartComponents/CartItem";
import FooterCart from "../../components/FooterCart";
import Button from "../../components/Button";

function Cart() {
  const name = useSelector((state) => state.name.name);
  const emptyCart = useSelector((state) => cartIsEmpty(state));
  const dispatch = useDispatch();

  return (
    <section className="cart-section">
      <Link to="/menu" className="menu-link">
        &larr; Back to menu
      </Link>

      {emptyCart && (
        <p className="cart-heading">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      )}

      {!emptyCart && (
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
      {!emptyCart && <FooterCart />}
    </section>
  );
}

export default Cart;
