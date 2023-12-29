import React from 'react'
import { Box, Heading, VStack,Stack, HStack } from '@chakra-ui/react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
    <Stack direction={["column","row"]}>
<VStack alignItems={['center']} width="full">
    <Heading children="All Rights Reserved" color={'white'}/>
    <Heading children="Omkar1403" size="sm" fontFamily={'body'} color={'yellow.400'}/>
</VStack>

<HStack spacing={["2","10"]} justifyContent="center" color="white" fontSize="50">
<a href="https://www.youtube.com/watch?v=R3I7iXShosU" target={'_blank'}>
 <TiSocialYoutubeCircular />
</a>
<a href="https://www.youtube.com/watch?v=R3I7iXShosU" target={'_blank'}>
 <TiSocialInstagramCircular />
</a>
<a href="https://github.com/deshmukhomkar144/Employee-Management" target={'_blank'}>
 <DiGithub/>
</a>
</HStack>

    </Stack>

  </Box>
}

export default Footer