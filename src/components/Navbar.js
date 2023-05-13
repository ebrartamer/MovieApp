import { Box, Button, ButtonGroup, Container, Flex, HStack, IconButton, Spacer, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react' 
import { FiSearch } from 'react-icons/fi'

 const Navbar = (props) => {
  const isDesktop = useBreakpointValue({base: false, md:true}) // this is a hook from chackra ui
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <Box as="section" pb={{ base: '1', md: '2' }} >

          <HStack spacing="300" justify="space-around">
            <Button
             color='pink.500'
             _hover={{
                  color:'blue.500',
             }} 
             variant='primary'>MovieApp
             </Button>
            {isDesktop ? (
              <Flex justify="space-around" flex="1">
                <HStack spacing="200">
                <ButtonGroup variant="link" spacing="8">
                  {['Movies', 'Series', 'Favourites'].map((item) => (
                    <Button key={item} color="gray.300">{item}</Button>
                  ))}
                </ButtonGroup>
                <IconButton
                 color="gray.300"
                  onClick={handleSearchClick}
                  variant='filled'
                  icon={<FiSearch fontSize= '1.5rem'/>}
                  aria-label='Search Movies'
                  />
                  </HStack>
              </Flex>
            ) : (
              
              <IconButton
                color="gray.300"
                onClick={handleSearchClick}
                variant="filled"
                icon={<FiSearch fontSize="1.25rem" />}
                aria-label="Search Movies"
              />
            )}
          </HStack>

      {isSearchOpen }
    </Box>
  )
}
export default Navbar;