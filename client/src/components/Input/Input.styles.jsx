import styled from 'styled-components';

export const InputWrapper = styled.div`
  justify-content: center;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 46.5px 10px 0;
  font-size: 16px;
  outline: none;
  border: none;
  color: #27282c;
  border-bottom: 1px solid #9f9f9f;
  background-color: transparent;
  position: relative;
`;
export const Label = styled.label`
  color: #27282c;
  font-size: 12px;
`;

export const IconButton = styled.i`
  color: #9f9f9f;
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 200;
  right: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
