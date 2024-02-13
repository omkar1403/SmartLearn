import { Container, FormLabel, Heading, VStack ,Input, Box,Button, Avatar} from '@chakra-ui/react'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { register } from '../../redux/actions/user';



export const fileuploadCSS=
    { 
        cursor:"pointer",marginLeft:"-5",
        width:"110%",
        border:"none",
        height:"100%",
        color:"#ECC94B",
        background:'white',
    };


const fileupload={
    "&::file-selector-button":fileuploadCSS,
};    

const Register = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[name,setName]=useState('');
    const[imagePrev,setImagePrev]=useState('');
    const[image,setImage]=useState('');

    const dispatch = useDispatch();
  const changeImagehandler=(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();
        
        reader.readAsDataURL(file);

        reader.onload=()=>{
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    const submitHandler = e => {
      e.preventDefault();
      const myForm = new FormData();
  
      myForm.append('name', name);
      myForm.append('email', email);
      myForm.append('password', password);
      myForm.append('file', image);
  
      dispatch(register(myForm));
    };

    return <Container h={"120vh"}>
        <VStack h={'full'} justifyContent="center" spacing={'16'}>
            <Heading textTransform={"uppercase"} children={"Registration"} />
            <form onSubmit={submitHandler} style={{ width: '95% '}}>

            <Box my="4" display={'flex'} justifyContent={'center'}>
                  <Avatar src={imagePrev} size={'2xl'} />
                </Box>
                

            <Box my={'4'}>
              <FormLabel htmlFor='name' children="Name" />
                <Input required id="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    type={"text"}
                    focusBorderColor="yellow.500"
                />
              </Box>

              <Box my={'4'}>
              <FormLabel htmlFor='email' children="Email Address" />
                <Input required id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    type={"email"}
                    focusBorderColor="yellow.500"
                />
              </Box>

              <Box my={'4'}>
              <FormLabel htmlFor='password' children="Password" />
                <Input required id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    type={"password"}
                    focusBorderColor="yellow.500"
                />
              </Box>

              <Box my={'4'}>
              <FormLabel htmlFor='password' children="Password" />
                <Input required id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    type={"password"}
                    focusBorderColor="yellow.500"
                />
              </Box>

              <Box my={'4'}>
              <FormLabel htmlFor='chooseavatar' children="Choose Avatar" />
                <Input required id="chooseavatar" 
                    accept='image/*'

                  css={fileupload}
                    type={"file"}
                    focusBorderColor="yellow.500"
                  onChange={changeImagehandler}

                />
            </Box>

           
              <Button my={'4'} colorScheme='yellow' type="submit">Sign Up</Button>

              <Box my="4">
                Already Signed in?{" "}<Link to="/login"><Button color="white" background={"blackAlpha.800"}>Login</Button>{" "}here</Link>
            </Box>

            </form>
        </VStack>
    </Container>
}


  export default Register