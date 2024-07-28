import { Box, Container, Heading, VStack,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container h="90vh" >
 <VStack boxShadow={'lg'} justifyContent={'center'} p={'3'}>
  <RiErrorWarningFill size={'5rem'}/>
 <Heading my="8" textAlign={"center"}>Page Not Found</Heading>
   
<Link to='/'>
  <Button variant={"ghost"}>Go to Home</Button>
</Link>

 </VStack>
    </Container>
  )
}

export default NotFound