import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #dadce0;
  background-color: white;
  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 50px;
  @media (max-width: 720px) {
    gap: 10px;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`;

export const Span = styled.span`
  font-size: 0.9em;
  color: ${Colors.default};
`;

export const Desclaimer = styled.span`
  font-size: 0.9em;
`;

export const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Img = styled.img`
  max-width: 400px;
  @media (max-width: 800px) {
    display: none;
  }
`;
