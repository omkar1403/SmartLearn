import { Grid, Box, Heading,Text, VStack,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../videos/intro.mp4"


const CoursePage = () => {
    const [lectureNumber,setlectureNumber]=useState(0);
const lectures=[{
    _id:"sadasdsad",
    title:"sample",
    description:"sample ssksksmkmsmk",
    video:{
        url:"sadsd",

    }
},{
    _id:"sadasdsad2",
    title:"sample2",
    description:"sample ssksksmkmsmk",
    video:{
        url:"sadsd",

    }
},{
    _id:"sadasdsad3",
    title:"sample3",
    description:"sample ssksksmkmsmk",
    video:{
        url:"sadsd",

    }
}]

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
        <Box>
        <video width={'100%'} controls src={introVideo} controlsList="nodownload noremoteplayback" disablePictureInPicture disableRemotePlayback></video>
       
        <Heading m="4" children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} />

        <Heading m="4" children="Description" />

        <Text m="4" children={lectures[lectureNumber].description} />
        </Box>

<VStack>
    {
        lectures.map((element,index)=>(
          <Button key={element._id}
          onClick={()=>{setlectureNumber(index)}}
          style={{
            width:'100%',
            padding:'1rem',
            textAlign:'center',
            margin:0,
            borderBottom:'1px solid rgba(0,0,0,0.2)',
          }}
          >
            <Text noOfLines={1}>
               #{index+1}{` `}{element.title}
            </Text>
          </Button>  
        ))
    }
</VStack>

    </Grid>
  )
}

export default CoursePage