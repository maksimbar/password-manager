import styled from 'styled-components';
import Colors from '../../helpers/Colors';
import { keyframes } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2c9dd5;
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
