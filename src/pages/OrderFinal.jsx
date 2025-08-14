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
      <p className="cart-heading">Order #US6WF6 status</p>{" "}
      <div>Preparing order</div>
      <div>
        Only 40 minutes left 😃 <p>(Estimated delivery: Aug 13, 07:57 PM)</p>
      </div>
    </section>
  );
}

export default OrderFinal;
