import React from 'react';
import { StyledButton, LoadingSpinner } from './Button.styles';

const Button = ({ loading, content, size, ...children }) => {
  return (
    <StyledButton disabled={loading} {...children} style={{ width: size }}>
      {loading && <LoadingSpinner />}
      {content}
    </StyledButton>
  );
};

export default Button;
