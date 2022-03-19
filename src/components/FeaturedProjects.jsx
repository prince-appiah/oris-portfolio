import { IconButton } from '@chakra-ui/button';
import { ExternalLinkIcon, SettingsIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Badge, Box, Grid, Heading, Link, Text } from '@chakra-ui/layout';
import { useState } from 'react';

// import { featuredProjects } from '../data.json';

export const FeaturedProjects = ({ featuredProjects }) => {
  console.log('🚀 ~ featuredProjects', featuredProjects);
  // const [projects, setProjects] = useState(featuredProjects);

  return (
    <Box mt={20} w="full">
      <Heading as="h3" size="sm">
        FEATURED PROJECTS ✨
      </Heading>

      <Grid
        mt={6}
        templateColumns={{
          sm: 'repeat(1,1fr)',
          md: 'repeat(1,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap={{ sm: 4, md: 10, lg: 16 }}
      >
        {featuredProjects.map(item => (
          <FeaturedCard key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

const FeaturedCard = ({ item }) => {
  console.log('🚀 ~ item', item);
  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'column', md: 'row', lg: 'column' }}
    >
      <Box width="100%">
        <Image
          fit="cover"
          rounded="md"
          height={{ base: 200, sm: 200, md: 240, lg: 200 }}
          width="full"
          loading="lazy"
          src={item.image}
          alt={item.name}
        ></Image>
      </Box>
      <Box py={{ base: 4, sm: 4, md: 4, lg: 4 }} px={{ base: 2, md: 4 }}>
        <Heading
          as="h3"
          fontWeight="medium"
          color="gray.700"
          size="sm"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {item.name}
        </Heading>
        <Text
          color="gray.500"
          fontWeight="light"
          noOfLines="5"
          textAlign="justify"
          py={{ base: 1, md: 1 }}
        >
          {item.description}
        </Text>

        <Box py={{ base: 1, sm: 2, md: 2 }}>
          {item.tags?.map(tag => (
            <Badge mr={2} py={1} px={2} variant="outline" colorScheme="purple">
              {tag}
            </Badge>
          ))}
        </Box>

        <Box pt={{ base: 4, sm: 4, md: 3 }}>
          <IconButton
            mr={4}
            size="sm"
            variant="outline"
            icon={<SettingsIcon />}
            as={Link}
            href={item.repo}
          />
          <IconButton
            mr={4}
            size="sm"
            variant="outline"
            icon={<ExternalLinkIcon />}
            as={Link}
            href={item.link}
          />
        </Box>
      </Box>
    </Box>
  );
};