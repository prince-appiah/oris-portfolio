import { Container } from '@chakra-ui/layout';
import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';

import GetInTouch from './components/GetInTouch';
import Intro from './components/Intro';
import Tools from './components/Tools';
import { header, getInTouch, tools } from './data.json';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        {/* Main section - with intro and avatar */}
        <Intro header={header} />
        <GetInTouch getInTouch={getInTouch} />
        <Tools tools={tools} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
