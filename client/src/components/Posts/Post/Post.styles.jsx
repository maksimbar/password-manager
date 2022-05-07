import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PreviewData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  right: 50px;
`;

export const Icon = styled.i`
  cursor: pointer;
  color: ${Colors.default};
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const EmailContainer = styled.div`
  color: ${Colors.secondary};
  font-size: 0.8em;
`;

export const PlatformName = styled.div`
  color: ${Colors.default};
  font-size: 1em;
`;
