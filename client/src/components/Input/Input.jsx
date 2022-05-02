import React, { useState } from "react";
import { InputWrapper, Label, StyledInput, IconButton } from "./Input.styles";

const Input = ({
  type,
  name,
  handleChange,
  label,
  length,
  value,
  ...children
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        value={value}
        maxLength={length}
        id={name}
        onChange={handleChange}
        name={name}
        {...children}
        type={
          type === "password" ? (passwordShown ? "text" : "password") : "text"
        }
        required
      />
      {type === "password" && (
        <IconButton
          className={
            passwordShown ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
          }
          onClick={togglePassword}
        />
      )}
    </InputWrapper>
  );
};

export default Input;
