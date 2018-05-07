import React from 'react';
import { ThemeProvider } from '@hixme-ui/theme'
import Container from '@hixme-ui/container'
import Title from '@hixme-ui/title'

export default AppContainer = (props) => {
  console.log('propspropspropspropspropspropspropspropsprops');
  return (
    <ThemeProvider>
      <Container padding='10px'>
        <Title jumbo primary>Welcome to your App</Title>

        <Container background='#efefef'>
          This is going to be a fun ride
          {props.children}
        </Container>
      </Container>
    </ThemeProvider>
  )
}