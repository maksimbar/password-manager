import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  max-width: 500px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  @media (max-width: 720px) {
    background-color: #fbfcfe;
    box-shadow: none;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const Heading = styled.h1``;

export const SubHeading = styled.h3``;

export const Img = styled.img``;

export const Span = styled.span`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #7d7f81;
`;

export const Activator = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: ${Colors.default};
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  height: 50px;
  color: #8091a7;
  border: 2px solid #8091a7;
  font-size: 1em;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const GoogleImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const ErrorMsg = styled.span`
  font-size: 0.8em;
  color: red;
  margin-right: auto;
  margin-top: -20px;
`;
