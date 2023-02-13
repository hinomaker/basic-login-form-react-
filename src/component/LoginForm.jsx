import React from "react";
import "./LoginForm.css";

const LoginForm = ({
  inputLabel,
  labelName,
  inputType,
  placeholderText,
  requiredCondition,
}) => {
  if (requiredCondition) {
    // 필수조건
    return (
      <div>
        <label htmlFor={inputLabel}>{labelName}</label>
        <span style={{ marginLeft: "10px", fontSize: "12px" }}>
          필수 <span style={{ color: "red" }}>*</span>
        </span>
        <br />
        <input
          id={inputLabel}
          type={inputType}
          placeholder={placeholderText}
          required
        />
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={inputLabel}>{labelName}</label>
        <br />
        <input
          id={inputLabel}
          type={inputType}
          placeholder={placeholderText}
          pattern="[0-9]*"
        />
        <br />
      </div>
    );
  }
};

export default LoginForm;
