import React from "react";

const InputField = ({ type, name, placeholder }) => {
  return (
    <div className="form-control">
      <input type={type} name={name} placeholder={placeholder} required />
    </div>
  );
};

export default InputField;
