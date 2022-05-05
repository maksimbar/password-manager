import styled from 'styled-components';

export const FormWrapper = styled.form`
  height: fit-content;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 15px;
`;

export const Button = styled.button`
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
  height: 40px;
  border: none;
  background-color: #f9f8f8;
  font-size: 1.2em;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #0c77b1;
    color: white;
  }
`;
export const Headline = styled.h4`
  font-size: 1.3em;
  margin: 0;
  margin-right: auto;
`;

export const InputField = styled.div`
  width: 100%;
  position: relative;
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CloseModal = styled.i`
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
