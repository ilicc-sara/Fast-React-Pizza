import React from "react";

function Button(props) {
  const { variation, type, children, value, handleClick } = props;

  let baseClassName = "btn";
  let modifierClassName;

  if (variation === "home button") {
    modifierClassName = `${value.length === 0 ? "hidden" : "start-btn"}`;
  }

  if (variation === "home button continue") {
    modifierClassName = "start-btn";
  }
  return (
    <button type={type} className={`${baseClassName} ${modifierClassName}`}>
      {children}
    </button>
  );
}

export default Button;
