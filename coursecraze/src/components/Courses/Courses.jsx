import React from 'react'
import { Container, HStack, Heading, Input, Button, Text, Stack, VStack, Image } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {
  const [keyword, setkeyword] = useState('');
  const [category, setcategory] = useState('');
  const categories = [
    'Web Development', 'Artificial Intelligence', 'Data Structure', 'App Development', 'Data Science', 'game Development'
  ];

  const addtoPlaylistHandler=()=>{
    console.log('Added to Playlist');
  }

  const Course = ({ views, title, imageSrc, id, addtoPlaylistHandler, creator, description, lectureCount }) => {
    return (
      <VStack className='Course' alignItems={["center", "flex-start"]}>
        <Image className='imagecourse' src={"https://th.bing.com/th/id/OIP.z37FBEjvP9Krthav9kv4LQHaE-?pid=ImgDet&rs=1"} boxSize="60" objectFit={'content'} />
        <Heading textAlign={["center", "left"]} maxW="200px" fontFamily={"sans-serif"} size={'sm'} noOfLines={3} children={title} />
        <Text noOfLines={2} children={description}/>
        <HStack>
        <Text fontWeight={'bold'} textTransform="uppercase" children={'Creator'}/>
        <Text fontWeight={'body'} textTransform="uppercase" children={creator}/>

        </HStack>
        <Heading textAlign={'center'} size="xs" children={`Lectures - ${lectureCount}`} textTransform="uppercase" />
        <Heading size="xs" children={`Views - ${views}`} textTransform="uppercase" />

        <Stack direction={['column','row']} alignItems="center">
          <Link to={`/Course/${id}`}>
            <Button colorScheme={'yellow'}>Watch Now</Button>
          </Link>
          <Button variant={'ghost'} colorScheme={'yellow'} onClick={()=>addtoPlaylistHandler(id)}>Add to Playlist</Button>

        </Stack>

      </VStack>
    )
  }

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setkeyword(e.target.value)}
        placeholder='Search a Course' type={"text"}
        focusBorderColor="Yellow"
      />
      <HStack overflowX={'auto'} paddingY="8" css={{"&::-webkit-scrollbar":{
        display:"none"
      }}}>
        {
          categories.map((item, index) => (
            <Button key={index} onClick={() => setcategory(item)} minW={'60'}>
              <Text children={item} />
            </Button>
          ))}
      </HStack>

      <Stack
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        < Course
          title={"Sample"}
          description={"Sample"}
          views={23}
          imageSrc={"Sample"}
          id={"Sample"}
          creator={"Sample boy"}
          lectureCount={2}
          addtoPlaylistHandler={addtoPlaylistHandler}
        />
      </Stack>

    </Container>

  )
}

export default Courses