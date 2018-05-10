import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Container } from './App.styles';

const AppContainer = (props) => {
  return (
    <MuiThemeProvider>
      <Container>
        {props.children}
      </Container>
    </MuiThemeProvider>
  )
}

export default AppContainer;