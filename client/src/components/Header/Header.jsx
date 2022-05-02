import React from "react";
import {
  Container,
  Desclaimer,
  Span,
  TextContainer,
  Img,
  StyledButton,
  Wrapper,
} from "./Header.styles";
import Form from "../Form/Form";
import securityGoogleImg from "../../assets/img/security.svg";
import Button from "../Button/Button";
const Header = ({ currentId, setCurrentId }) => {
  return (
    <Wrapper>
      <Container>
        <Form
          currentId={currentId}
          setCurrentId={setCurrentId}
          component={<StyledButton>Add Item</StyledButton>}
        />
        <TextContainer>
          <Span>A friendly reminder</Span>
          <Desclaimer>
            Get a strong password using our integrated password generator
          </Desclaimer>
        </TextContainer>
        <Img src={securityGoogleImg} alt="image of a lock picker" />
      </Container>
    </Wrapper>
  );
};

export default Header;
