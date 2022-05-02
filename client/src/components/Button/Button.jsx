import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ content, size, ...other }) => {
  return (
    <StyledButton {...other} style={{ width: size }}>
      {content}
    </StyledButton>
  );
};

export default Button;
