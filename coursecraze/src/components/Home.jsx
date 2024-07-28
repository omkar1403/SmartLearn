import React from 'react'
import {Heading, Stack,VStack,Text,Button ,Image,Box, HStack} from "@chakra-ui/react"
import {Link} from 'react-router-dom';
import "./Home/home.css"
import vg from "../images/bg.png"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../videos/intro.mp4"
import xyz from "../images/logo2.jpg"



function Home() {
  return <section classname='home'>
    <div className='container'>
      <Stack
      direction={['column','row']}
      height="100%"
      justifyContent={['center','space-between']}
      alignItems="center"
      spacing={['16','56']}
      >
   
    <VStack width={"full"} alignItems={['center','flex-end']} spacing="8" >
      <HStack marginBottom={35}>
        <Image src={xyz}   style={{
        width: '100px', // Adjust the width as per your requirement
        height: 'auto',
        borderRadius: '50%', // Makes it a circle (optional)
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow (optional)
        // Add more styling properties as needed to make it attractive
      }}/>
    <Heading children="SmartLearn" fontFamily="Times New Roman" size={"4xl"} />
    </HStack>
    <Heading children="LEARN FROM THE EXPERTS" size={"xl"}/>
    <Text fontSize={'2xl'} fontFamily="cursive" textAlign={["center","left"]} children="Find valuable content at Reasonable price"/>
    <Link to="/courses">
      <Button size={'lg'} colorScheme='yellow'>Explore now</Button>
    </Link>
    </VStack>

 <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit="contain"/>

      </Stack>
    </div>
    <Box padding={'8'} bg="blackAlpha.800">
      <Heading 
      textAlign={"center"} 
      fontFamily={"body"}
      color={'yellow.400'}
      children="OUR BRANDS" />
   
 <HStack className="brandsBanner" justifyContent={'space-evenly'} marginTop="4">
 <CgGoogle/>
 <CgYoutube/>
 <SiCoursera/>
 <SiUdemy/>
 <DiAws/>
 </HStack>
 </Box>

<div className="container2">
  <video controls src={introVideo} controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback></video>
</div>

    </section>
}

export default Home