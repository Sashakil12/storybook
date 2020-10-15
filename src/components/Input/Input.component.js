import React from "react";
import "./Input.styles.css";
function Input(props) {
  const {
    width = "small",
    children,
    placeholder = "default ph",
    ...rest
  } = props;

  return (
    <input className={`input ${width}`} {...rest} placeholder={placeholder} />
  );
}

export default Input;
