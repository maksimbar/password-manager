import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ content, size, ...children }) => {
  return (
    <StyledButton {...children} style={{ width: size }}>
      {content}
    </StyledButton>
  );
};

export default Button;
