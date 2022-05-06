import React, { useState, useEffect } from 'react';
import generatePassword from '../../helpers/PasswordGenerator';
import { copyToClipboard } from '../../helpers/Toasts';
import {
  Wrapper,
  Container,
  PasswordContainer,
  PasswordWrapper,
  Nav,
  Button,
  Settings,
  SettingsGroup,
  Label,
  Checkbox,
  EntropyContainer,
  SliderContainer
} from './Generator.styles';
import 'antd/dist/antd.min.css';
import { Slider, InputNumber } from 'antd';
import calculateEntropy from '../../helpers/Entropy';

const Generator = () => {
  const [password, setPassword] = useState('');
  const [input, setInput] = useState({
    length: 128,
    uppercase: true,
    numbers: true,
    symbols: true
  });

  useEffect(() => {
    handleGenerate();
  }, [input]);

  const handleChange = (event) => {
    const value = event.target.type === 'number' ? event.target.value : event.target.checked;

    setInput((prev) => ({
      ...prev,
      [event.target.name]: value
    }));
  };

  const handleGenerate = () => {
    const { length, numbers, symbols, uppercase } = input;
    setPassword(generatePassword(length, numbers, symbols, uppercase));
  };

  return (
    <Wrapper>
      <Container>
        <PasswordContainer>
          <PasswordWrapper>{password}</PasswordWrapper>
          <EntropyContainer>
            {` Entropy:
            ${calculateEntropy(password, input.length)} bit`}
          </EntropyContainer>
        </PasswordContainer>
        <SliderContainer>
          Length:
          <Slider
            defaultValue={128}
            onChange={(value) => {
              setInput((prev) => ({
                ...prev,
                length: value
              }));
            }}
            value={input.length}
            min={8}
            max={128}
            style={{ maxWidth: '600px', width: '95%' }}
          />
          <InputNumber
            value={input.length}
            onChange={(value) => {
              setInput((prev) => ({
                ...prev,
                length: value
              }));
            }}
            min={8}
            max={128}
            style={{ margin: '0 16px' }}
          />
        </SliderContainer>
        <Settings>
          <SettingsGroup>
            <Label htmlFor="uppercase">A-Z</Label>
            <Checkbox
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={input.uppercase}
              onChange={handleChange}
            />
          </SettingsGroup>
          <SettingsGroup>
            <Label htmlFor="numbers">0-9</Label>
            <Checkbox
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={input.numbers}
              onChange={handleChange}
            />
          </SettingsGroup>
          <SettingsGroup>
            <Label htmlFor="symbols">!@#$%^&*</Label>
            <Checkbox
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={input.symbols}
              onChange={handleChange}
            />
          </SettingsGroup>
        </Settings>

        <Nav>
          <Button onClick={handleGenerate}>Regenerate</Button>
          <Button onClick={() => copyToClipboard(password)}>Copy</Button>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Generator;
