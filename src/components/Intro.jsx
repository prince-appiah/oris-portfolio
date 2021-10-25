import { Image } from '@chakra-ui/image';
import { Circle, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import avatar from '../assets/avatar.png';

function Intro({ header }) {
  const { title, subtitle } = header;
  return (
    <Box mt="8" display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column" justifyContent="space-evenly">
        <Heading
          as="h3"
          size="lg"
          color="gray.800"
          letterSpacing="wide"
          fontWeight="bold"
        >
          {title}
        </Heading>

        <Text
          fontSize="2xl"
          lineHeight="tall"
          letterSpacing="wide"
          fontWeight="normal"
          color="gray.500"
        >
          {subtitle}
        </Text>
      </Box>
      <Box>
        <Circle size="2xs" rounded="full">
          <Image
            borderRadius="full"
            objectFit="contain"
            bg="gray.400"
            src={avatar}
            alt={title}
          />
        </Circle>
      </Box>
    </Box>
  );
}

export default Intro;
