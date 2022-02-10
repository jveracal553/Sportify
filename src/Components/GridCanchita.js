import {
  Box,
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
        <Link
          to={{
            pathname: `/canchita/${canchita.id}`,
            state: canchita,
          }}
        >
          <Center>
            <Image mt={4} src={canchita.image} w={24} h={24}></Image>
          </Center>
        </Link>
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
    <Box>
      <Box p={2}>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4} mt={4}>
          {gridItem.map((item) => {
            return <GridCanchitaItem key={item.id} canchita={item} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default GridCanchita;
