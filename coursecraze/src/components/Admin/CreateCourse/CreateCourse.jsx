import {  Container, Grid, Heading, VStack,Input,Select, Button,Image } from '@chakra-ui/react'
import React, { useState } from 'react' 
import cursor from '../../../images/cursor.png'
import Sidebar from '../Sidebar'
import { fileuploadCSS } from '../../Auth/Register'
import { createCourse } from '../../../redux/actions/admin'
import { useDispatch, useSelector } from 'react-redux';


const CreateCourse = () => {

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [createdBy,setCreatedBy]=useState("");
const [category,setCategory]=useState("");
const [image,setImage]=useState("");
const [imagePrev,setImagePrev]=useState("");

const changeImagehandler=e=>{
  const file=e.target.files[0];
  const reader=new FileReader();
  
  reader.readAsDataURL(file);

  reader.onload=()=>{
      setImagePrev(reader.result);
      setImage(file);
  }
}

const dispatch = useDispatch();
const { loading, error, message } = useSelector(state => state.admin);


const categories = [
  'Web Development', 'Artificial Intelligence', 'Data Structure', 'App Development', 'Data Science', 'game Development'
];

const submitHandler = e => {
  e.preventDefault();
  const myForm = new FormData();
  myForm.append('title', title);
  myForm.append('description', description);
  myForm.append('category', category);
  myForm.append('createdBy', createdBy);
  myForm.append('file', image);
  dispatch(createCourse(myForm));
};



  return (
    <Grid  css={{
        cursor:`url(${cursor}),default`,
      }}  minH={'100vH'} templateColumns={['1fr','5fr 1fr']}>
  

  <Container py={'16'} >
  <form onSubmit={submitHandler}>
<Heading textTransform={'uppercase'} children={'Create Course'} my={16} textAlign={['center','left']}/>
<VStack m='auto' spacing={'8'}> 
<Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          type={'text'}
          focusBorderColor="purple.300"
 />

<Input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          type={'text'}
          focusBorderColor="purple.300"
 />

<Input
          value={createdBy}
          onChange={e => setCreatedBy(e.target.value)}
          placeholder="Creator Name"
          type={'text'}
          focusBorderColor="purple.300"
 />

 <Select focusBorderColor='purple.300' value={category} onChange={e => setCategory(e.target.value)}>
<option value=""> 
Category
</option>

{categories.map(item=>(
  <option key={item} value={item}>
   {item}
  </option>
))}


 </Select>
 <Input 
     accept='image/*'
     required
      css={{
                    '&::file-selector-button':{
                      ...fileuploadCSS,color:"purple",
                    },
                  }}
                    type={"file"}
                    focusBorderColor="purple.300"
                  onChange={changeImagehandler}

                />


</VStack>

{imagePrev &&(
  <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
) 
} 

<Button   isLoading={loading} w="full" colorScheme='purple' type='submit' my={'4'}>
  Create
</Button>

</form>
  </Container>
  
  <Sidebar />
  
      </Grid>
  )
}

export default CreateCourse