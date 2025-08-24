import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { priceSum } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Input from "../components/Input";
import Button from "../components/Button";

const URL = "https://react-fast-pizza-api";
const URL_MAP = "https://nominatim.openstreetmap.org";

function NewOrder() {
  const cart = useSelector((state) => state.cart);
  const name = useSelector((state) => state.name.name);
  const sumPrice = useSelector((state) => priceSum(state));

  const navigate = useNavigate();

  const [shown, setShown] = useState(true);

  const [priority, setPriority] = useState(false);
  const [inputs, setInputs] = useState({
    nameValue: name,
    phoneValue: "",
    addressValue: "",
  });

  function handleInputChange(e) {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  const newOrder = {
    address: inputs.addressValue,
    cart: cart,
    customer: inputs.nameValue,
    orderPrice: sumPrice,
    phone: inputs.phoneValue,
    priority: priority,
  };
  const fetchOrder = async () => {
    try {
      const response = await fetch(`${URL}.onrender.com/api/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        return;
      }
      navigate(`/order/${data.data.id}`);
    } catch (error) {
      toast.error("Ups, something went wrong...");
    }
  };

  function submitForm(e) {
    e.preventDefault();
    fetchOrder();
  }

  function getMyLocation() {
    navigator.geolocation.watchPosition(
      function (position) {
        const { latitude, longitude } = position.coords;

        const fetchLocation = async () => {
          try {
            const response = await fetch(
              `${URL_MAP}/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );

            const data = await response.json();
            setInputs((prev) => {
              return {
                ...prev,
                addressValue: `${data.address.suburb}, ${data.address.city}, ${data.address.country}`,
              };
            });
            setShown(false);

            if (!response.ok) return;
          } catch (error) {
            toast.error(error);
          }
        };
        fetchLocation();
      },
      function () {
        toast.error("Could not get our position, please type your address...");
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
          <Input
            type="text"
            value={inputs.nameValue}
            name="nameValue"
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="input-cont">
          <label>Phone Number</label>
          <Input
            type="number"
            value={inputs.phoneValue}
            name="phoneValue"
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="input-cont">
          <label>Address</label>
          <div className="location-cont">
            <Input
              type="text"
              value={inputs.addressValue}
              name="addressValue"
              handleInputChange={handleInputChange}
            />
          </div>
          {shown && (
            <Button
              variation="location"
              handleClick={() => getMyLocation()}
              type="button"
            >
              Get Position
            </Button>
          )}
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

        <Button type="submit" variation="order">
          Order now for ${sumPrice}
        </Button>
      </form>
    </section>
  );
}

export default NewOrder;
