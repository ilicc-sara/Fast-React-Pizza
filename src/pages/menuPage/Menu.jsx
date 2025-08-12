import { useState, useEffect } from "react";
import MenuItem from "./menuComponents/MenuItem";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { priceSum } from "../../redux/cartSlice";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart);
  // console.log(sumPrice());
  // const priceSum = useSelector(sumPrice);
  // console.log(sumPrice);
  const sumPrice = useSelector((state) => priceSum(state));
  console.log("price", sumPrice);
  console.log(cart);

  const url = `https://react-fast-pizza-api.onrender.com/api/menu`;
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}`);
        const posts = await response.json();
        setMenuItems(posts.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <section className="menu-section">
      {isLoading && <div className="loader"></div>}
      <ul className="menu-items">
        {menuItems.length !== 0 &&
          menuItems.map((item, index) => (
            <MenuItem
              key={index}
              id={item.id}
              soldOut={item.soldOut}
              img={item.imageUrl}
              name={item.name}
              ingredients={item.ingredients}
              price={item.unitPrice}
            />
          ))}
      </ul>
      {cart.length !== 0 && (
        <footer className="footer-cart">
          <div className="cart-info">
            <p>
              {cart.reduce((acc, cur) => {
                return acc + cur.amount;
              }, 0)}
            </p>
            <p>
              $
              {cart
                .reduce((acc, cur) => {
                  return acc + cur.price * cur.amount;
                }, 0)
                .toFixed(2)}
            </p>
          </div>
          <Link to="/cart" className="open-cart">
            Open Cart &rarr;
          </Link>
        </footer>
      )}
    </section>
  );
}

export default Menu;
