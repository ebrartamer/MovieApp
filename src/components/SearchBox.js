import { Input } from '@chakra-ui/react';
import React from 'react'

 const SearchBox = () => {
  return (
    <>
    <Input 
    variant={'filled'}
    htmlSize={4} 
    width={'50%'} 
    placeholder='Search a Movie...'
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    top={'50%'}
    left={'50%'}
    transform={'translate(-50%, -50%)'}></Input>
    </>
  )
}
export default SearchBox;