import React, { useState } from "react";
import Label from "./Label";

const EmailInput = ({
  placeholder,
  label,
  description,
  className = "",
  onChange,
  value,
  ...rest
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    setIsValid(emailRegex.test(email));
    if (onChange) {
      onChange(event); // Pass the event to the parent handler
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <Label text={label} />
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={handleEmailChange}
        className={`w-full p-2 border rounded focus:outline-none focus:ring ${
          isValid ? "focus:ring-blue-300" : "focus:ring-red-300"
        }`}
        {...rest}
      />
      <Label text={description} />
    </div>
  );
};

export default EmailInput;
