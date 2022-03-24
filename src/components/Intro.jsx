import { Image } from '@chakra-ui/image';
import { Circle, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import avatar from '../assets/avatar.png';

function Intro({ header }) {
  const { title, subtitle } = header;

  return (
    <Box
      mt="8"
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems={{ base: 'center' }}
    >
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
          pt={5}
        >
          {subtitle}
        </Text>

        <Text
          fontSize="2xl"
          lineHeight="tall"
          letterSpacing="wide"
          fontWeight="normal"
          color="gray.500"
          pt={5}
        >
          I'm currently a{' '}
          <Box as="span" color="purple.500" fontWeight={500}>
            backend developer
          </Box>{' '}
          at{' '}
          <Box
            as="a"
            color="purple.500"
            fontWeight={500}
            _hover={{
              cursor: 'pointer',
              textUnderlineOffset: 6,
              textUnderlinePosition: 'right',
              textDecorationWidth: 1,
              textDecorationStyle: 'wavy',
              textDecoration: 'underline',
            }}
            href="https://clyver.com"
            target="_blank"
          >
            Clyver Inc
          </Box>
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
