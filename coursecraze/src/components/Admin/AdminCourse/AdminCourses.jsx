import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../images/cursor.png'
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal';
import { useState } from 'react';

const AdminCourses = () => {
const courses=[{
_id:'ajakkaka',
title:'React course',
category:'Web Development',
poster:{
  url:'https://www.bing.com/images/search?view=detailV2&ccid=Bs8YUQLV&id=0DAE6CE20681A68B742EC7410A12D51B1F74644F&thid=OIP.Bs8YUQLV-ps3iDsJ9GnWpwHaE8&mediaurl=https%3a%2f%2fwww.u-run.fr%2fwp-content%2fuploads%2f2017%2f04%2frbkFIT_SS17_Gorge-1300.jpg&exph=4912&expw=7360&q=image+course&simid=608020340139764292&FORM=IRPRST&ck=7CF4A94D3E1FB24F1D113632C2C7DC36&selectedIndex=1&itb=0'
},
createdBy:'Omkar Deshmukh',
views:123,
numOfVideos:12,

}];



const coureDetailsHandler=(courseId,title)=>{
  onOpen();
};
const deleteButtonHandler=courseId=>{
  console.log(courseId);
};

const addLectureHandler=(e,courseId,description,video)=>{
e.preventDefault();
};


const deleteLectureButtonHandler=(courseId,lectureId)=>{
console.log(courseId);
console.log(lectureId);
};

const {isOpen,onClose,onOpen}=useDisclosure();

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row
                  coureDetailsHandler={coureDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                  
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={"jcjddxjkdk"}
          courseTitle="React Course"
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}

          
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

function Row({ item, coureDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>

      <Td>
        <Image src={item.poster.url} />
      </Td>

      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => coureDetailsHandler(item._id, item.title)}
            variant={'outline'}
            color="purple.500"
            
          >
            View Lectures
          </Button>

          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
            
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
export default AdminCourses;
