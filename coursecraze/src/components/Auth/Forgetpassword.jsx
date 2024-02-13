import { Button, Container, Heading, VStack,FormLabel,Box,Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const Forgetpassword = () => {
    const[email,setEmail]=useState("");
  
const {loading,message,error}=useSelector(state=>state.profile)

    const dispatch=useDispatch();
    const submitHandler=e=>{
      e.preventDefault();
      dispatch(forgetPassword(email));
    }

    useEffect(()=>{
      if(error){
      toast.error(error);
      dispatch({type:'clearError'});
      }
      if(message){
        toast.success(message);
        dispatch({type:'clearMessage'});
      }
    },[dispatch,error,message]);


  return <Container padding={"16"} height={"90vh"}>
    <form onSubmit={submitHandler}>
    <Heading children="Forget Password" my={"16"} textTransform={"uppercase"} textAlign={["center","left"]} />
        <VStack spacing={"8"}>

       
              <FormLabel htmlFor='email' />
                <Input required id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    type={"email"}
                    focusBorderColor="yellow.500"
                />
              
              <Button isLoading={loading} type='submit' width={"full"} colorScheme='yellow'>Send Reset Link</Button>
        </VStack>

    </form>
  </Container>
}

export default Forgetpassword