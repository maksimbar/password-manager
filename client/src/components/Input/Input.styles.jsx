import styled from "styled-components";
import Colors from "../../helpers/Colors";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const StyledInput = styled.input`
  background-color: inherit;
  padding: 10px 46.5px 10px 0;
  font-size: 16px;
  outline: none;
  border: none;
  color: #27282c;
  border-bottom: 1px solid #9f9f9f;
`;
export const Label = styled.label`
  color: #27282c;
  font-size: 12px;
`;

export const IconButton = styled.i`
  color: ${Colors.default};
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 200;
  top: 34px;
  right: 5px;
  cursor: pointer;
`;
