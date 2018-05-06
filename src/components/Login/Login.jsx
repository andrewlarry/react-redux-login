import React, { Component } from 'react';
import {
  LoginContainer,
  LoginBox,
  InputBox,
  ButtonBox,
  SubmitBox,
  TextInput,
  PasswordInput,
  Button,
  SubmitButton,
} from './Login.styles';

// import { AppConsumer } from '../../AppContext';
import Input from './Input.jsx';

const Login = (props) => {
  return (
    <LoginContainer>
      {/* <LoginBox signup={!props.state.loginView}>
        <ButtonBox>
          <Button primary={context.state.loginView} onClick={() => context.toggleLogin(true)}>Login</Button>
          <Button primary={!context.state.loginView} onClick={() => context.toggleLogin(false)}>Sign up</Button>
        </ButtonBox>
        <Input login={context.state.loginView}/>
      </LoginBox> */}
    </LoginContainer>
  );
};

export default Login;
