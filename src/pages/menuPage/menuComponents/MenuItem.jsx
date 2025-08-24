import {
  addToCart,
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";

function MenuItem(props) {
  const { soldOut, img, name, ingredients, price, id } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const itemIsInCart = cart.includes(cart.find((item) => item.pizzaId === id));

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
              <Button
                variation="decrease"
                handleClick={() => dispatch(decreaseAmount({ id: id }))}
                type="button"
              >
                -
              </Button>

              <span className="amount">
                {cart.find((item) => item.pizzaId === id).quantity}
              </span>

              <Button
                variation="decrease"
                handleClick={() => dispatch(increaseAmount({ id: id }))}
                type="button"
              >
                +
              </Button>
            </div>

            <Button
              variation="delete"
              handleClick={() => dispatch(deleteCartItem({ id: id }))}
              type="button"
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      {!itemIsInCart ? (
        <Button
          variation="add"
          handleClick={() =>
            dispatch(addToCart({ title: name, price: price, id: id }))
          }
          type="button"
          soldOut={soldOut}
        >
          Add to Cart
        </Button>
      ) : (
        <p className="pizza-price-second">$ {price.toFixed(2)}</p>
      )}
    </li>
  );
}

export default MenuItem;
