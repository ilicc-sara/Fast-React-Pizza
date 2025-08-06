import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/slice";
import { useSelector } from "react-redux";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();
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

  console.log(menuItems);

  return (
    <section className="menu-section">
      <ul className="menu-items">
        {menuItems.length !== 0 &&
          menuItems.map((item, index) => (
            <li className="menu-item" key={index}>
              <img
                className={`${item.soldOut ? "sold-out" : ""} img-item`}
                src={`${item.imageUrl}`}
              />
              <div className="info-text">
                <p className="pizza-name">{item.name}</p>
                <p className="pizza-ingredients">
                  {item.ingredients
                    .map((ing) => ing[0].toUpperCase() + ing.slice(1))
                    .join(", ")}
                </p>

                <p className="pizza-prize">
                  {item.soldOut ? (
                    <span className="sold-out-span">SOLD OUT</span>
                  ) : (
                    `$ ${item.unitPrice.toFixed(2)}`
                  )}
                </p>
              </div>

              <button
                className={`${item.soldOut ? "hidden" : "add-btn"}`}
                onClick={() =>
                  dispatch(
                    addToCart({ title: item.name, price: item.unitPrice })
                  )
                }
              >
                Add to Cart
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Menu;
