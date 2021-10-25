import { Image } from '@chakra-ui/image';
import { Box, Grid, Heading, Text } from '@chakra-ui/layout';

import react from '../assets/react.svg';

function Tools({ tools }) {
  const { title } = tools;

  return (
    <Box mt="20">
      <Heading as="h3" size="sm">
        TOOLS I WORK WITH 🛠
      </Heading>
      <Grid mt="6" templateColumns="repeat(3,1fr)" gap={6}>
        {tools.map(tool => (
          <ToolCard key={tool.id} title={tool.name} icon={tool.icon} />
          // <Image src={tool.icon} />
        ))}
      </Grid>
    </Box>
  );
}

const ToolCard = ({ title, icon }) => {
  return (
    <Box p="3" height="full" width="275px" bg="gray.100">
      <Box mb="8" pt="3" display="flex" alignItems="center">
        <Text mr="6">
          <Image src={icon} />
        </Text>
        <Text color="gray.800" fontWeight="medium">
          {title}
        </Text>
      </Box>
      <Text color="gray.500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repellendus
        veritatis dolores sed! Voluptatum, vel eligendi ab fugit tempora tempore
      </Text>
    </Box>
  );
};

export default Tools;
