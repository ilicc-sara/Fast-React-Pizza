import React from "react";

function NewOrder() {
  return (
    <section className="new-order-section">
      <p className="cart-heading">Ready to order? Let's go!</p>
      <form
        style={{
          width: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>
          First Name
          <input type="text" />
        </label>
        <label>
          Phone Number
          <input type="tel" />
        </label>
        <label>
          Address
          <input type="address" />
        </label>
      </form>
    </section>
  );
}

export default NewOrder;
