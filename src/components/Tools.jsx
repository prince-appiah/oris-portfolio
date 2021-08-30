import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';

function Tools({ tools }) {
  const { title } = tools;

  return (
    <Box mt="20">
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <Box pt="6">Cards go here</Box>
    </Box>
  );
}


const ToolCard = () => {
    return ()
}

export default Tools;
