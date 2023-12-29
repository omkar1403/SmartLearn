import { Button, Container, Heading, VStack,FormLabel,Box,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'

const Resetpassword = () => {
    const[password,setPassword]=useState("");

    const params=useParams();

  return <Container padding={"16"} height={"90vh"}>
    <form>
    <Heading children="Reset Password" my={"16"} textTransform={"uppercase"} textAlign={["center","left"]} />
        <VStack spacing={"8"}>
       
              <FormLabel htmlFor='email' />
                <Input required id="email" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter New Password"
                    type={"password"}
                    focusBorderColor="yellow.500"
                />
              
              <Button type='submit' width={"full"} colorScheme='yellow'>Reset Password</Button>
        </VStack>

    </form>
  </Container>
}

export default Resetpassword