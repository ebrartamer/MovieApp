import { Box, Center, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { BsSuitHeartFill } from 'react-icons/bs';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>

      <Flex felxwrap='Wrap' justifyContent='center'>
        {props.movies.map((movie, index) => (
          <Center py={10}>
            <Box
              overflowX={'scroll'}
              m={'3'}
              h={'450px'}
              w={'300px'}
              bg={'gray.900'}
              boxShadow={'2x1'}
              rounded={'md'}
              overflow={'hidden'}>
              <Flex mt={'5'} justify={'center'} alignItems={'center'} h={'300px'} w={'full'} flexDirection={'column'}>
                <Image
                  m={'5'}
                  h={'300px'}
                  w={'200px'}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  objectFit={'cover'}
                />
                <Flex mt={2} alignItems={'center'}>

                  <Text
                    m={'2'}
                    color={'white'}>{movie.title}
                  </Text>
                  <Box
                    onClick={() => props.handleFavouriteClick(movie)}
                    mr={2}>
                    <IconButton
                      m={'2'}
                      bg={'bg-transparent'}
                      icon={<BsSuitHeartFill fontSize="1.25rem" />}
                      color={'red.500'}>

                    </IconButton>
                  </Box>
                </Flex>
              </Flex>

            </Box>
          </Center>
        ))}
      </Flex>
    </>
  )
}
export default MovieList;