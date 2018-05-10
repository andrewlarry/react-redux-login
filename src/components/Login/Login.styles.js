import React from 'react';
import styled, { css } from 'styled-components';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const LoginContainer = (props) => (
  <Card style={{ textAlign: 'center', width: '50%' }}>
    <CardActions style={{ textAlign: 'center' }}>
      <FlatButton 
        backgroundColor='palevioletred'
        style={{ width: '20%', marginRight: '40px'}}
      >
        Login
      </FlatButton>
      <FlatButton 
        backgroundColor='palevioletred'
        style={{ width: '20%', marginLeft: '40px'}}
      >
        Signup
      </FlatButton>
    </CardActions>
    {props.children}
  </Card>
)
// export const LoginContainer = (props) => (
//     <Card 
//       flex
//       flexColumn
//       alignCenter
//       background='#eee' 
//       width='40%' 
//       margin='auto'
//     >
//       {props.children}
//     </Card>
// );

// export const ButtonBox = (props) => (
//   <Container
//     flex
//     flexRow
//     alignCenter
//     justifySpaceAround
//     padding='0'
//     width='70%'
//   >
//     {props.children}
//   </Container>
// )


// export const Button = styled.button`
//   border-radius: 4px;
//   padding: 0.25em 1em;

//   background: transparent;
//   color: palevioletred;
//   border: 2px solid palevioletred;

//   width: 30%;
//   height: 50%;
//   max-height: 36px;
//   outline: none;

//   &:hover {
//     opacity: 0.5;
//   }
//   ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
// `;

// export const ButtonBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   align-items: center;

//   margin: 0;
//   padding: 5%;   
//   height: 25%;
// `;
// export const LoginBox = styled.div`
//   display: flex;
//   justify-content: space-betwee;
//   flex-direction: column;

//   height: 50%;
//   width: 40%;
//   margin: auto;
//   padding: 0;
  
//   text-align: center;
//   background-color: #F5F5F5;
//   border-radius: 4px;
//   ${props => props.signup && css`
//     height: 80%;
//   `}
// `;


