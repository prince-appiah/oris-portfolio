import { Container } from '@chakra-ui/layout';
import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import GetInTouch from './components/GetInTouch';
import Intro from './components/Intro';
import { header, getInTouch } from './data.json';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        {/* Main section - with intro and avatar */}
        <Intro header={header} />
        <GetInTouch getInTouch={getInTouch} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
