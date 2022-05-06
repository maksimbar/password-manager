import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #dadce0;
  background-color: white;
`;

export const PasswordContainer = styled.div`
  padding: 5px 10px 5px 10px;
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #dadce0;
  transition: background-color 0.1s ease-in;
  &:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  &:last-child {
    border: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  &:hover {
    background-color: #fbfcfe;
  }
`;

export const LoaderContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  height: fit-content;
`;

export const Message = styled.h3``;
