import { useState, useEffect } from "react";
import MenuItem from "./menuComponents/MenuItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../../redux/loadingSlice";
import FooterCart from "../../components/FooterCart";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  const cart = useSelector((state) => state.cart);
  const loading = useSelector((state) => state.loading.isLoading);

  const dispatch = useDispatch();

  const url = `https://react-fast-pizza-api.onrender.com/api/menu`;
  useEffect(() => {
    const fetchPost = async () => {
      try {
        dispatch(toggleLoading({ isLoading: true }));
        const response = await fetch(`${url}`);
        const posts = await response.json();
        setMenuItems(posts.data);

        dispatch(toggleLoading({ isLoading: false }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <section className="menu-section">
      {loading && <div className="loader"></div>}
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
      {cart.length !== 0 && <FooterCart />}
    </section>
  );
}

export default Menu;
