import React from "react";

function OrderFinal() {
  function generateCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  console.log(generateCode());
  return (
    <section className="section-final">
      <p className="cart-heading">Order #{generateCode()} status</p>{" "}
      <div className="delivery-time-cont">
        <p>Preparing order</p>
        <p>
          Only 40 minutes left 😃 <p>(Estimated delivery: Aug 13, 07:57 PM)</p>
        </p>
      </div>
      <ul></ul>
      <div>
        <p>Price pizza: $59.00</p>
        <p>To pay on delivery: $59.00</p>
      </div>
    </section>
  );
}

export default OrderFinal;
