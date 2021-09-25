import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, LinkBox, Text } from '@chakra-ui/layout';
import dribbble from '../assets/dribbble.svg';
import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.svg';

function GetInTouch({ getInTouch }) {
  const { title, git, lnkdn, drble, mail } = getInTouch;
  return (
    <Box mt="20">
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <Flex mt="6">
        <Item icon={github} link={git.link} bg="gray.100" hover="gray.300" />
        <Item icon={linkedin} link={lnkdn.link} bg="blue.50" hover="blue.200" />
        <Item icon={dribbble} link={drble.link} bg="red.50" hover="red.100" />
        <Item icon={gmail} link={mail.link} bg="red.50" hover="red.100" />
      </Flex>
      <Flex mt="14">
        <Box
          as="button"
          p="4"
          rounded="md"
          color="purple.600"
          bg="purple.100"
          _hover={{ bg: 'purple.200' }}
        >
          <Text fontWeight="medium"> Download Resume 📝</Text>
        </Box>
      </Flex>
    </Box>
  );
}

const Item = ({ icon, bg, hover, link }) => {
  return (
    <LinkBox
      as="a"
      href={link}
      target="_blank"
      width="50px"
      height="50px"
      mr="8"
      p="2.5"
      rounded="base"
      bg={bg}
      borderWidth="1px"
      borderColor={hover}
      _hover={{ bg: hover }}
    >
      <Image src={icon} />
    </LinkBox>
  );
};

export default GetInTouch;
