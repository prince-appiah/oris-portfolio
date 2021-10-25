import { Image } from '@chakra-ui/image';
import { Box, Heading, Text } from '@chakra-ui/layout';

export const FeaturedProjects = () => {
  return (
    <Box mt={20} w="full">
      <Heading as="h3" size="sm">
        FEATURED PROJECTS ✨
      </Heading>

      <Box display="flex" flexDirection={['column']}>
        <Image
          fit="contain"
          loading="lazy"
          src="https://bit.ly/sage-adebayo"
          alt="imageee"
        ></Image>
        <Box>
          <Text>Project Name</Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            deleniti beatae aperiam suscipit alias error ullam quod voluptatibus
            ipsum. Beatae ducimus quae aliquid tenetur voluptatibus iste ab?
            Tenetur, incidunt enim? Nisi quibusdam, modi unde veniam, eos rerum
            natus blanditiis eligendi mollitia ad incidunt aliquam nihil cum,
            ipsam tempore reiciendis soluta! Perferendis repellat exercitationem
            reiciendis blanditiis dignissimos animi hic laudantium ullam! Iure,
            nisi saepe odit magnam magni consequuntur, sunt possimus, id
            accusantium ad tempore dolor voluptates quam neque! Iusto, nulla
            unde. Asperiores, quidem qui enim esse sequi autem. Omnis, harum
            eos?
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
