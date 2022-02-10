import {
  Box,
  Center,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

function Canchita({ location }) {
  const { state } = location;

  if (!state) {
    window.location = "/";
  }
  return (
    <Box>
      <Box p={8} d="flex" alignItems="center">
        <Box ml={4}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image src={state.image} w={48}></Image>
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Box>
                  <Heading>Price: ${state.price}</Heading>
                  <Tag mt={2}>{state.category}</Tag>
                </Box>
                <Text>{state.description}</Text>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default Canchita;
