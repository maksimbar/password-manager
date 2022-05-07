import React, { useState } from 'react';
import { InputWrapper, InputContainer, Label, StyledInput, IconButton } from './Input.styles';
import { useFormContext } from 'react-hook-form';

export const TextInput = ({ name, label, length, value, ...children }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer>
        <StyledInput
          value={value}
          maxLength={length}
          id={name}
          name={name}
          type={passwordShown ? 'text' : 'password'}
          {...children}
          required
        />
        {name === 'password' && (
          <IconButton
            className={passwordShown ? 'fa-solid fa-eye fa-xl' : 'fa-solid fa-eye-slash fa-xl'}
            onClick={togglePassword}
          />
        )}
      </InputContainer>
    </InputWrapper>
  );
};

export const PasswordInput = ({ name, label, value, ...children }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);
  const { register } = useFormContext();
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer>
        <StyledInput
          value={value}
          name={name}
          type={passwordShown ? 'text' : 'password'}
          {...register(name)}
          {...children}
          required
        />
        <IconButton
          className={passwordShown ? 'fa-solid fa-eye fa-xl' : 'fa-solid fa-eye-slash fa-xl'}
          onClick={togglePassword}
        />
      </InputContainer>
    </InputWrapper>
  );
};
