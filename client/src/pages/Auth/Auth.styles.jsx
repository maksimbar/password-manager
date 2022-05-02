import styled from "styled-components";

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
  color: #0c77b1;
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
