import { Container } from '@chakra-ui/layout';
import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import Intro from './components/Intro';
import { header } from './data.json';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        {/* Main section - with intro and avatar */}
        <Intro header={header} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
