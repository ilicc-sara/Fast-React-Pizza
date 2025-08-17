import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function OrderFinal() {
  const cart = useSelector((state) => state.cart);
  const params = useParams();
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://react-fast-pizza-api.onrender.com/api/order/${params.orderId}`
        );
        const data = await response.json();
        setOrderInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  console.log(orderInfo);

  return (
    <section className="section-final">
      <div className="order-num-cont">
        <p className="cart-heading">Order #{params.orderId} status</p>{" "}
        <div className="marks">
          {orderInfo?.priority && <div className="priority-mark">Priority</div>}
          <div className="preparing-mark">Preparing order</div>
        </div>
      </div>
      <div className="delivery-time-cont">
        <p className="bold-text">Only 40 minutes left 😃</p>
        <p>(Estimated delivery: Aug 13, 07:57 PM)</p>
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
