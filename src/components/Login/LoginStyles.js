import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: space-betwee;
  flex-direction: column;

  height: 50%;
  width: 40%;
  margin: auto;
  padding: 0;
  
  text-align: center;
  background-color: #F5F5F5;
  border-radius: 4px;
  ${props => props.signup && css`
    height: 80%;
  `}
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  margin: 0;
  padding: 5%;   
  height: 25%;
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.25em 1em;

  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  width: 30%;
  height: 50%;
  max-height: 36px;
  outline: none;

  &:hover {
    opacity: 0.5;
  }
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;
