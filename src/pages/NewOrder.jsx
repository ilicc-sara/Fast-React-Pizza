import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { priceSum } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function NewOrder() {
  const name = useSelector((state) => state.name.name);
  const sumPrice = useSelector((state) => priceSum(state));
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState(name);
  const [phoneValue, setPhoneValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [priority, setPriority] = useState(false);

  const newOrder = {
    address: addressValue,
    // cart: [],
    cart: cart,
    customer: nameValue,
    orderPrice: sumPrice,
    phone: phoneValue,
    priority: priority,
  };
  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://react-fast-pizza-api.onrender.com/api/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newOrder),
        }
      );
      console.log(response.status);
      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        toast.error(data.message);
        return;
      }
      navigate(`/order/${data.data.id}`);
    } catch (error) {
      console.log(error.response);
    }
  };

  function submitForm(e) {
    e.preventDefault();
    fetchPost();
  }

  function getMyLocation() {
    navigator.geolocation.watchPosition(
      function (position) {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude);
        const fetchLocation = async () => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );

            const data = await response.json();
            console.log(
              data.address.suburb,
              data.address.city,
              data.address.country
            );
            setAddressValue(
              `${data.address.suburb}, ${data.address.city}, ${data.address.country}`
            );

            if (!response.ok) return;
          } catch (error) {
            console.log(error);
          }
        };
        fetchLocation();
      },
      function () {
        toast.error("Could not get our position");
      }
    );
  }
  return (
    <section className="new-order-section">
      <ToastContainer position="top-center" />
      <p className="cart-heading">Ready to order? Let's go!</p>
      <form onSubmit={submitForm} className="order-form">
        <div className="input-cont">
          <label>First Name</label>
          <input
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>
        <div className="input-cont">
          <label>Phone Number</label>
          <input
            type="number"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
          />
        </div>
        <div className="input-cont">
          <label>Address</label>
          <div className="location-cont">
            <input
              type="text"
              value={addressValue}
              onChange={(e) => setAddressValue(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn location-btn"
            onClick={(e) => {
              e.target.classList.add("hidden");
              getMyLocation();
            }}
          >
            Get Position
          </button>
        </div>

        <div className="priority-order">
          <input
            className="input-checkbox"
            type="checkbox"
            checked={priority}
            onChange={(e) => setPriority(e.target.checked)}
          />
          <p>Want to give your order priority?</p>
        </div>

        <button type="submit" className="order-btn btn">
          Order now for ${sumPrice}
        </button>
      </form>
    </section>
  );
}

export default NewOrder;
