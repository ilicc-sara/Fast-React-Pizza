import { useState, useEffect } from "react";
import MenuItem from "../MenuItem";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart);

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
            <p>5</p>
            <p>$55</p>
          </div>
          <Link className="open-cart">Open Cart &rarr;</Link>
        </footer>
      )}
    </section>
  );
}

export default Menu;
