function Input(props) {
  const { type, value, name, handleInputChange, className, placeholder } =
    props;

  return (
    <input
      type={type}
      className={`${className}`}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={(e) => handleInputChange(e)}
    />
  );
}

export default Input;
