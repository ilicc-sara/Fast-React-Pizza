import React from "react";

function Input(props) {
  const { type, value, name, handleInputChange } = props;

  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) => handleInputChange(e)}
    />
  );
}

export default Input;
