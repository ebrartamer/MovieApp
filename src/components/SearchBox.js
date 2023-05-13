import { Input } from '@chakra-ui/react';
import React from 'react'

 const SearchBox = (props) => {
  return (
    <>
    <Input 
    variant={'ghost'}
    htmlSize={'lg'} 
    placeholder='Search a Movie...'
    value={props.value}
    onChange={(event) => props.setSearchValue(event.target.value)}
    width={{ base: "full", md: "100%" }}>
    
    </Input>
    </>
  )
}
export default SearchBox;