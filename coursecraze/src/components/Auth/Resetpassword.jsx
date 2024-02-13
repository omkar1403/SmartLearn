import { Button, Container, Heading, VStack,FormLabel,Box,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom'
import { resetPassword } from '../../redux/actions/profile';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Resetpassword = () => {
    const[password,setPassword]=useState("");

    const params=useParams();

    const navigate = useNavigate();

  const { loading, message, error } = useSelector(state => state.profile);

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, error, message]);


  return <Container padding={"16"} height={"90vh"}>
    <form onSubmit={submitHandler}>
    <Heading children="Reset Password" my={"16"} textTransform={"uppercase"} textAlign={["center","left"]} />
        <VStack spacing={"8"}>
       
              <FormLabel htmlFor='email' />
                <Input required id="email" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter New Password"
                    type={"password"}
                    focusBorderColor="yellow.500"
                />
              
              <Button isLoading={loading} type='submit' width={"full"} colorScheme='yellow'>Reset Password</Button>
        </VStack>

    </form>
  </Container>
}

export default Resetpassword