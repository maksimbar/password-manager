import styled from "styled-components";

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
  /* margin-left: auto; */
`;

export const Icon = styled.i`
  cursor: pointer;
  color: #2761e0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const EmailContainer = styled.div`
  color: grey;
  font-size: 0.8em;
`;

export const SiteUrl = styled.div`
  color: #0060a6;
  font-size: 1em;
`;
