import { Box, Button, ButtonGroup, Container, Flex, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React from 'react' 
import { FiSearch } from 'react-icons/fi'

 const Navbar = () => {
    const isDesktop = useBreakpointValue({base: false, md:true}) // this is a hook from chackra ui
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-transparent" boxShadow="sm">
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
                  {['Movies', 'Series'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <IconButton
                  variant='ghost'
                  icon={<FiSearch fontSize= '1.5rem'/>}
                  aria-label='Open Menu'
                  />
                  </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiSearch fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
export default Navbar;