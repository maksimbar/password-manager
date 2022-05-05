import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  background-color: ${Colors.default};
  color: white;
  font-size: 1.3em;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
