import React, { Component } from 'react';
import {
  InputBox,
  TextInput,
  PasswordInput,
  SubmitButton,
  SubmitBox,
} from './InputStyles';

const Input = (props) => {
  let inputBox;
  if (props.login) {
    inputBox = (
      <form>
        <InputBox>
          <TextInput placeholder="username" />
          <PasswordInput placeholder="password" />
        </InputBox>
        <SubmitBox>
          <SubmitButton placeholder="Submit"/>
        </SubmitBox>
      </form>
    );
  } else {
    inputBox = (
      <form>
        <InputBox>
          <TextInput placeholder="first name" />
          <TextInput placeholder="last name" />
          <TextInput placeholder="email" />
          <TextInput placeholder="username" />
          <PasswordInput placeholder="password" />
        </InputBox>
        <SubmitBox>
          <SubmitButton placeholder="Submit" />
        </SubmitBox>
      </form>
    );
  }
  return inputBox;
};

export default Input;