import React, { useState, useEffect } from "react";

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
            <li className="menu-item" key={index}>
              <img className="img-item" src={`${item.imageUrl}`} />
              <div className="info-text">
                <p>{item.name}</p>
                <p>{item.unitPrice}</p>
              </div>

              <button className="add-btn">Add to Cart</button>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Menu;
