import React, { useState } from "react";
import Label from "./Label";

const PasswordInput = ({
  placeholder ,
  description,
  className = "",
  onChange,
  label,
  value,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`relative ${className} w-[300px]`}>
      <Label text={label} />
      <input
        type={isVisible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        {...rest}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
      >
        {isVisible ? "👁️" : "👁️‍🗨️"}
      </button>
      <Label text={description} />
    </div>
  );
};

export default PasswordInput;
