import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  const name = useSelector((state) => state.name);
  console.log(name);

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

  // console.log(menuItems);

  return (
    <section className="menu-section">
      <ul className="menu-items">
        {menuItems.length !== 0 &&
          menuItems.map((item, index) => (
            <MenuItem
              key={index}
              soldOut={item.soldOut}
              img={item.imageUrl}
              name={item.name}
              ingredients={item.ingredients}
              price={item.unitPrice}
            />
          ))}
      </ul>
    </section>
  );
}

export default Menu;
