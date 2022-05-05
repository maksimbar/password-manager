import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #dadce0;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 20px;
  width: 100%;
`;

export const PasswordContainer = styled.div`
  position: relative;
  padding: 10px;

  margin: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 90px;
  height: fit-content;
  color: #0c77b1;
  background-color: ${Colors.primary};
  border-radius: 10px;
  border: 1px solid #dadce0;
`;

export const PasswordWrapper = styled.div`
  width: 90%;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid #dadce0;
  font-size: 1em;
  height: 50px;
  font-weight: 500;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f6f7f9;
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SettingsGroup = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label``;

export const Checkbox = styled.input``;

export const EntropyContainer = styled.div`
  color: ${Colors.secondary};
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: absolute;
  right: 0;
  bottom: -27px;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;
