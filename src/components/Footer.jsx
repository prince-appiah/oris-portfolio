import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const Footer = () => {
  return (
    <Box
      my={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text color="gray.500" mb={3}>
        Designed and developed with by{' '}
        <Box
          as="span"
          color="purple"
          fontWeight="medium"
          textDecoration="underline"
          textDecorationLine="grammar-error"
        >
          Prince Appiah
        </Box>
      </Text>
      <Text fontWeight="medium">&copy; 2021</Text>
    </Box>
  );
};
