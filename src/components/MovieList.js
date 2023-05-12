import { Box, Center, Flex, Image } from '@chakra-ui/react';
import React from 'react'

const MovieList = (props) => {

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
              bg={'black'}
              boxShadow={'2x1'}
              rounded={'md'}
              overflow={'hidden'}>
              <Flex mt={'5'} justify={'center'} alignItems={'center'} h={'300px'} w={'full'}>
                <Image
                  m={'5'}
                  h={'300px'}
                  w={'200px'}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
                  objectFit={'cover'} />
              </Flex>
            </Box>
          </Center>
        ))}
      </Flex>
    </>
  )
}
export default MovieList;