import React from 'react'
import {Box, Button, Container,FormLabel,Heading,Input,Textarea,VStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Request = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[course,setCourse]=useState("")
  return (
    <Container h="92vh">
<VStack h="full" justifyContent={"center"} spacing={"16"}>
    <Heading children="Request New Course"/>
    <form style={{ width: '100% '}}>
              <Box my={'4'}>
              <FormLabel htmlFor='name' children="Name" />
                <Input required id="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Abc"
                    type={"text"}
                    focusBorderColor="yellow.500"
                />
              </Box>
      
      <Box>
              <FormLabel htmlFor='email' children="Email" />
                <Input required id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    type={"text"}
                    focusBorderColor="yellow.500"
                />
              </Box>

              <Box my={'4'}>
              <FormLabel htmlFor='course' children="Course" />
                <Textarea required id="course" value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder="Explain the course"
                   
                    type={"text"}
                    focusBorderColor="yellow.500"
                />
              </Box>



              <Box my="4">
                <Button color="white" background={"yellow.300"}>Send Mail</Button>
            </Box>

            <Box my="4">
                See Available Courses{" "}<Link to="/courses"><Button color="white" background={"yellow.300"}>Click here</Button>{" "}here</Link>
            </Box>


            </form>
</VStack>
    </Container>
  )
}

export default Request