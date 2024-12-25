import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const OTPInput = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setOtp(value);
    }
  };

  return (
    <div className="otp-input">
      <Label text={`Enter OTP`}/>
    
      <Input
      type={"text"}
      value={otp}
      onChange={handleChange}
      placeholder={"1234"}
      maxLength={4}
       />
    </div>
  );
};

export default OTPInput;
