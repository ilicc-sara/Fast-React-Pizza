import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  const url = `https://react-fast-pizza-api.onrender.com/api/menu`;
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${url}`);
        const posts = await response.json();
        // console.log(posts.data);
        setMenuItems(posts.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  console.log(menuItems);

  return (
    <section className="menu-section">
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

      <footer className="footer-cart"></footer>
    </section>
  );
}

export default Menu;
