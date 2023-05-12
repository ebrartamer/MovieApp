import { Box, Button, ButtonGroup, Container, Flex, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react' 
import { FiSearch } from 'react-icons/fi'

 const Navbar = (props) => {
  const SearchBox = props.searchBox  
  const isDesktop = useBreakpointValue({base: false, md:true}) // this is a hook from chackra ui
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-transparent" boxShadow="sm" top={'0'} width={'100%'}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="100" justify="space-around">
            <Button
             colorScheme='blue'
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
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <IconButton
                onClick={handleSearchClick}
                  variant='ghost'
                  icon={<FiSearch fontSize= '1.5rem'/>}
                  aria-label='Search Movies'
                  />
                  </HStack>
              </Flex>
            ) : (
              <IconButton
                onClick={handleSearchClick}
                variant="ghost"
                icon={<FiSearch fontSize="1.25rem" />}
                aria-label="Search Movies"
              />
            )}
          </HStack>
        </Container>
      </Box>
      {isSearchOpen && <SearchBox/>}
    </Box>
  )
}
export default Navbar;