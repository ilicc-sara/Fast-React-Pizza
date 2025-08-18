import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { differenceInMinutes } from "date-fns";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../redux/loadingSlice";

function OrderFinal() {
  const params = useParams();
  const [orderInfo, setOrderInfo] = useState(null);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  function formatDate(string) {
    const utcDate = new Date(string);
    const localDate = utcDate.toLocaleString();
    return localDate;
  }

  function calculateEstimatedTime(string) {
    const utcDate = new Date(string);
    const estimatedTime = Math.abs(differenceInMinutes(new Date(), utcDate));

    if (estimatedTime !== 0) {
      return estimatedTime;
    } else return "0";
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        dispatch(toggleLoading({ isLoading: true }));
        const response = await fetch(
          `https://react-fast-pizza-api.onrender.com/api/order/${params.orderId}`
        );
        const data = await response.json();
        setOrderInfo(data.data);
        dispatch(toggleLoading({ isLoading: false }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <section className="section-final">
      {loading.isLoading && <div className="loader"></div>}
      <div className="order-num-cont">
        <p className="cart-heading">Order #{params.orderId} status</p>{" "}
        <div className="marks">
          {orderInfo?.priority && <div className="priority-mark">Priority</div>}
          <div className="preparing-mark">Preparing order</div>
        </div>
      </div>
      <div className="delivery-time-cont">
        <p className="bold-text">
          Only {calculateEstimatedTime(orderInfo?.estimatedDelivery)} minutes
          left 😃
        </p>
        <p className="estimated-delivery-text">
          (Estimated delivery: {formatDate(orderInfo?.estimatedDelivery)})
        </p>
      </div>
      <ul className="final-order-list">
        {orderInfo?.cart.map((item, index) => (
          <li key={index} className="final-order-item">
            <p>
              <span className="bold-text">{item.quantity} &times; </span>
              {item.name}
            </p>
            <span className="bold-text">${item.totalPrice.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="final-price-cont">
        <p className="primary-text">
          Price pizza: ${orderInfo?.orderPrice.toFixed(2)}
        </p>
        {orderInfo?.priority && (
          <p className="primary-text">
            Price priority: ${orderInfo?.priorityPrice.toFixed(2)}
          </p>
        )}
        <p className="bold-text">
          To pay on delivery: $
          {(orderInfo?.orderPrice + orderInfo?.priorityPrice).toFixed(2)}
        </p>
      </div>
    </section>
  );
}

export default OrderFinal;
