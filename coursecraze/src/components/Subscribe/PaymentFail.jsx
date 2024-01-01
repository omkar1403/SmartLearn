import { Box, Container, Heading, VStack,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    <Container h="90vh" >
    <VStack boxShadow={'lg'} justifyContent={'center'} p={'3'}>
     <RiErrorWarningFill size={'5rem'}/>
    <Heading my="8" textAlign={"center"} textTransform={'uppercase'}>Payment Fail</Heading>
   
      
   
   <Link to='/subscribe'>
     <Button variant={"ghost"} textTransform={'uppercase'}>Try Again</Button>
   </Link>
   
    </VStack>
       </Container>
  )
}

export default PaymentFail