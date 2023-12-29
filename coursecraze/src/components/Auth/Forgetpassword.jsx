import { Button, Container, Heading, VStack,FormLabel,Box,Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const Forgetpassword = () => {
    const[email,setEmail]=useState("");
  return <Container padding={"16"} height={"90vh"}>
    <form>
    <Heading children="Forget Password" my={"16"} textTransform={"uppercase"} textAlign={["center","left"]} />
        <VStack spacing={"8"}>

       
              <FormLabel htmlFor='email' />
                <Input required id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    type={"email"}
                    focusBorderColor="yellow.500"
                />
              
              <Button type='submit' width={"full"} colorScheme='yellow'>Send Reset Link</Button>
        </VStack>

    </form>
  </Container>
}

export default Forgetpassword