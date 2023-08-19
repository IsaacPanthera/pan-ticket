import React from "react";
import "./Input.css";
function Input({ label, placeholder, type, name, onChange, value }) {
  return (
    <div className="input-container">
      <label for=""> {label} </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;