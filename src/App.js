import { Container } from '@chakra-ui/layout';
import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';

import GetInTouch from './components/GetInTouch';
import Intro from './components/Intro';
import Tools from './components/Tools';
import { header, getInTouch, tools, featuredProjects } from './data.json';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Intro header={header} />
        <GetInTouch getInTouch={getInTouch} />
        <Tools tools={tools} />
        <FeaturedProjects featuredProjects={featuredProjects} />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
