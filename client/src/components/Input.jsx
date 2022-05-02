import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  background-color: inherit;
  padding: 10px 0 10px 0;
  font-size: 16px;
  outline: none;
  border: none;
  color: #27282c;
  border-bottom: 1px solid #9f9f9f;
`;
const Label = styled.label`
  color: #27282c;
  font-size: 12px;
`;

export const PasswordInput = ({
  status,
  name,
  handleChange,
  label,
  placeholder,
  length,
  value,
}) => {
  return (
    <InputWrapper>
      <Label for={name}>{label}</Label>
      <StyledInput
        value={value}
        maxLength={length}
        id={name}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        type="password"
        required
      />
    </InputWrapper>
  );
};

const Input = ({
  type,
  name,
  handleChange,
  label,
  placeholder,
  length,
  value,
}) => {
  return (
    <InputWrapper>
      <Label for={name}>{label}</Label>
      <StyledInput
        value={value}
        maxLength={length}
        id={name}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        type={type}
        required
      />
    </InputWrapper>
  );
};

export default Input;
