import { Box, Container, Heading, VStack,Text,Button} from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
     <Heading children="Welcome" my="8" textAlign={'center'} />
     <VStack boxShadow={"lg"} alignItems={"stretch"} borderRadius={"lg"} spacing={'0'}>
      <Box bg="yellow.400" p={"4"} css={{borderRadius:"8px 8px 0 0"}}> 
        <text children={'Pro Pack-$299.00'}/>
      </Box>
      <Box p="4">
 <VStack textAlign={"center"} px="8" spacing="8">
    <Text children={"Join pro pack and get access to all content."}/>
    <Heading size={"md"} children={"$299 Only"} />
 </VStack>
 <Button my="8" w={'full'} colorScheme='yellow'>
    Buy Now
 </Button>
      </Box>
      <Box bg={'blackAlpha.600'} p="4" css={{borderRadius:'0 0 8px 8px'}}>
        <Heading color={'white'} children={"100% Refund at Cancellation"} size={'sm'} textTransform={'uppercase'}/>
        <Text children={"*Terms & Conditions Apply"} fontSize={'xs'} color={'white'} />

      </Box>
     </VStack>
    </Container>
  )
}

export default Subscribe