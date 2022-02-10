import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GridCanchitaItem = ({ canchita }) => {
  return (
    <Box p={4} borderRadius="lg" borderWidth="1px">
      <Box>
        {/* <Link
          to={{
            pathname: `/canchita/${canchita.id}`,
            state: canchita,
          }}
        > */}
        <Center>
          <Image mt={4} src={canchita.image} w={24} h={24}></Image>
        </Center>

        {/* </Link> */}
      </Box>
      <Box></Box>
      <Heading mt={4} noOfLines={1} size="sm" fontWeight="Normal">
        {canchita.title}
      </Heading>
      <Spacer />
      <Box>
        <Center>
          <Tag mt={2}>{canchita.category}</Tag>
        </Center>
      </Box>
      <Stack>
        <Box>
          <Center>
            <Tag mt={2}>${canchita.price}</Tag>
          </Center>
          <Button colorScheme="teal" size="sm" ml={60}>
            Go
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

function GridCanchita() {
  const [gridItem, setGridItem] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/jveracal553/Sportify/feature/SFY-67-create_navbar/canchitainfo"
      )
      .then(({ data }) => {
        setGridItem(data);
      });
  }, []);

  return (
    <Box p={20}>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={0}>
          {gridItem.map((item) => {
            return <GridCanchitaItem key={item.id} canchita={item} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default GridCanchita;
