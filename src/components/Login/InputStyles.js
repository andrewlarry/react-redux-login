import styled, { css } from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin: 0;
  height: 70%;
`;

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  border: 2px solid black;
  border-radius: 4px;
  outline: none;

  padding: 0.25em;
  width: 70%;
  height: 15%;
  max-height: 25px;
  margin: 1% auto;

  background-color: white;
  font-size: 1em;
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
})`
  border: 2px solid black;
  border-radius: 4px;
  outline: none;

  padding: 0.25em;
  width: 70%;
  height: 15%;
  max-height: 25px;
  margin: 1% auto;

  background-color: white;
  font-size: 1em;
`;

export const SubmitBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30%
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  border-radius: 4px;
  padding: 0.25em 1em;

  background: #47B747;
  color: white;
  border: 2px solid #47B747;

  width: 30%;
  height: 50%;
  max-height: 36px;
  outline: none;

  &:hover {
    opacity: 0.5;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 75%;
`;