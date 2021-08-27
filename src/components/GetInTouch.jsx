import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import dribbble from '../assets/dribbble.svg';
import gmail from '../assets/gmail.svg';

function GetInTouch({ getInTouch }) {
  const { title, git, lnkdn, drble, mail } = getInTouch;
  return (
    <Box mt="20">
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <Flex mt="6">
        <Item icon={github} link={git.link} bg="gray.100" hover="gray.200" />
        <Item icon={linkedin} link={lnkdn.link} bg="blue.50" hover="blue.200" />
        <Item icon={dribbble} link={drble.link} bg="red.50" hover="red.100" />
        <Item icon={gmail} link={mail.link} bg="red.50" hover="red.100" />
      </Flex>
    </Box>
  );
}

const Item = ({ icon, bg, hover, link }) => {
  return (
    <Box
      as="a"
      href={link}
      target="_blank"
      width="50px"
      height="50px"
      mr="8"
      p="2.5"
      rounded="base"
      bg={bg}
      _hover={{ bg: hover }}
    >
      <Image src={icon} />
    </Box>
  );
};

export default GetInTouch;
