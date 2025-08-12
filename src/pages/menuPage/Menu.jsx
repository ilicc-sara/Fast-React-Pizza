import { useState, useEffect } from "react";
import MenuItem from "./menuComponents/MenuItem";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { priceSum, amountSum } from "../../redux/cartSlice";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart);

  const sumPrice = useSelector((state) => priceSum(state));
  const sumAmount = useSelector((state) => amountSum(state));

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
            <p>{sumAmount}</p>
            <p>${sumPrice}</p>
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
