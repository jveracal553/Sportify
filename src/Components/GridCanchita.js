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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GridCanchitaItem = ({ canchita }) => {
  return (
    <div className='gridCanchitas'>
      <Box
        p={4}
        borderRadius='lg'
        borderWidth='2px'
        _hover={{
          background: 'white',
          color: 'teal.500',
          'box-shadow': '0 0 5px 5px #ddd',
        }}
      >
        <Box>
          <Link
            to={{
              pathname: `/canchita/${canchita.id}`,
              state: canchita,
            }}
          >
            <Center>
              <Image mt={1} src={canchita.image} w={'95%'} h={'95%'}></Image>
            </Center>
          </Link>
        </Box>
        <Box></Box>
        <Heading mt={4} noOfLines={1} size='xs' fontWeight='Bold'>
          {canchita.title}
        </Heading>
        <Spacer />
        <Box>
          <Heading mt={4} noOfLines={1} size='xs' fontWeight='Normal'>
            {canchita.category}
          </Heading>
        </Box>
        <Stack>
          <Box>
            <Heading mt={4} noOfLines={1} size='xs' fontWeight='Normal'>
              Desde S/{canchita.price}
            </Heading>
            <Button colorScheme='teal' size='xs' ml={'55%'}>
              Ver horarios
            </Button>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

function GridCanchita() {
  const [gridItem, setGridItem] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/jveracal553/Sportify/feature/SFY-67-create_navbar/canchitainfo'
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
