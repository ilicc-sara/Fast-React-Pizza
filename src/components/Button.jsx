import React from "react";

function Button(props) {
  const { variation, type, children, value, soldOut, handleClick } = props;

  let baseClassName = "btn";
  let modifierClassName;

  if (variation === "home button") {
    modifierClassName = `${value.length === 0 ? "hidden" : "start-btn"}`;
  }

  if (variation === "home button continue") {
    modifierClassName = "start-btn";
  }

  if (variation === "decrease") {
    modifierClassName = "decrease-btn";
  }

  if (variation === "increase") {
    modifierClassName = "increase-btn";
  }

  if (variation === "delete") {
    modifierClassName = "delete-btn";
  }

  if (variation === "add") {
    modifierClassName = `${soldOut ? "hidden" : "add-btn"}`;
  }

  return (
    <button
      type={type}
      className={`${baseClassName} ${modifierClassName}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
