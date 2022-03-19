import { Image } from '@chakra-ui/image';
import { Box, Grid, Heading, Text } from '@chakra-ui/layout';

function Tools({ tools }) {
  return (
    <Box mt="20">
      <Heading as="h3" size="sm">
        TOOLS I WORK WITH 🛠
      </Heading>
      <Grid
        mt="6"
        templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }}
        gap={6}
      >
        {tools.map(tool => (
          <ToolCard key={tool.id} title={tool.name} icon={tool.icon} />
        ))}
      </Grid>
    </Box>
  );
}

const ToolCard = ({ title, icon }) => {
  return (
    <Box p="2" height="full" width="auto" bg="gray.100">
      <Box p="3" display="flex" alignItems="center">
        <Image src={icon} width={14} height={14} pr={6} />
        <Text color="gray.800" fontWeight="medium">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default Tools;
