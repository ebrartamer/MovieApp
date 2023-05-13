import { Box, Heading } from '@chakra-ui/react';
import React from 'react'

const MovieListHeading= (props) => {
  return (
    <>
    <Box
    bgColor={'gray.800'}>
    <Heading
    color={'gray.100'}>{props.heading}</Heading>
    </Box>
    </>
  )
}
export default MovieListHeading;