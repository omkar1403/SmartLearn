import { Avatar, Button, Container, HStack, Heading, Stack, VStack, Text, Image,Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody,Input, ModalHeader, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileuploadCSS } from '../Auth/Register'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPlaylist, updateProfilePicture } from '../../redux/actions/profile'
import { cancelSubscription, loadUser } from '../../redux/actions/user'
import toast from 'react-hot-toast'

const Profile = ({user}) => {
  const { loading, message, error } = useSelector(state => state.profile);
  
  const {
    loading: subscriptionLoading,
    message: subscriptionMessage,
    error: subscriptionError,
  } = useSelector(state => state.subscription);

  
  const removeFromPlaylistHandler = async id => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };


    const {isOpen,onClose,onOpen}=useDisclosure();
    
   
   
    const dispatch=useDispatch();
    const changeImageSubmitHandler=async (e,image)=>{
        e.preventDefault();
        const myForm=new FormData();
        myForm.append('file',image);
       await dispatch(updateProfilePicture(myForm));
      dispatch(loadUser());
    }

    const cancelSubscriptionHandler = () => {
      dispatch(cancelSubscription());
    };
  
    
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
      if (subscriptionMessage) {
        toast.success(subscriptionMessage);
        dispatch({ type: 'clearMessage' });
        dispatch(loadUser());
      }
  
      if (subscriptionError) {
        toast.error(subscriptionError);
        dispatch({ type: 'clearError' });
      }

    }, [dispatch, error, message,subscriptionError, subscriptionMessage]);

  

    return (
        <Container minH={'95vh'} maxW={'container.lg'} py="8" >
            <Heading children="Profile" m="8" textTransform={'uppercase'} />
            <Stack justifyContent={'flex-start'} direction={['column', 'row']} alignItems={'center'} spacing={['8', '16']} padding={'8'}>
                <VStack>
                    <Avatar boxSize={'48'} src={user.avatar.url}/>
                    <Button onClick={onOpen} colorScheme='yellow' varient='ghost'>
                        Change Profile
                    </Button>
                </VStack>

                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text children="Name" fontWeight={'bold'}></Text>
                        <Text children={user.name}></Text>
                    </HStack>
                    <HStack>
                        <Text children="email" fontWeight={'bold'}></Text>
                        <Text children={user.email}></Text>
                    </HStack>
                    <HStack>
                        <Text children="CreatedAt" fontWeight={'bold'}></Text>
                        <Text children={user.createdAt.split("T")[0]}></Text>
                    </HStack>
                     {user.role !== "admin" && (<HStack>
                            <Text children="Subscription" fontWeight={'bold'} />
                            {user.subscription && user.subscription.status === "active" ? (
                                <Button isLoading={subscriptionLoading} onClick={cancelSubscriptionHandler} color={'yellow.500'} variant="unstyled">Cancel Subscription</Button>
                            ) : (<Link to="/subscribe">
                                <Button colorScheme='yellow'>Subscribe</Button></Link>
                            )}
                        </HStack>
                       ) }
                   

                    <Stack direction={['column', 'row']} alignItems={'center'}>
                        <Link to='/updateprofile'>
                            <Button>Update Profile</Button>
                        </Link>
                        <Link to='/changepassword'>
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>


                </VStack>

            </Stack>


            <Heading children="Playlist" size={'md'} my='8' />
            {
                user.playlist.length > 0 && (
                    <Stack direction={['column', 'row']} alignItems={'center'} flexWrap='wrap' padding={'4'}>
                        {
                            user.playlist.map((element) => (
                                <VStack w="48" m="2" key={element.course}>
                                    <Image boxSize={'full'} objectFit="conntain" src={element.poster} />
                                    <HStack>
                                        <Link to={`/course/${element.course}`}>
                                            <Button variant={'ghost'} colorScheme='yellow'> watch Now</Button>
                                        </Link>

                                        <Button isLoading={loading} onClick={() => removeFromPlaylistHandler(element.course)}><RiDeleteBin7Fill /></Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }

<ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} loading={loading}/>


        </Container>
    )
}

export default Profile

function ChangePhotoBox({
    isOpen,
    onClose,
    changeImageSubmitHandler,
    loading,
  }) {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');
  
    const changeImage = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
  
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    };
  
    const closeHandler = () => {
      onClose();
      setImagePrev('');
      setImage('');
    };
    return (
      <Modal isOpen={isOpen} onClose={closeHandler}>
        <ModalOverlay backdropFilter={'blur(10px)'} />
        <ModalContent>
          <ModalHeader>Change Photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <form onSubmit={e => changeImageSubmitHandler(e, image)}>
                <VStack spacing={'8'}>
                  {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
  
                  <Input
                    type={'file'}
                    css={{ '&::file-selector-button': fileuploadCSS }}
                    onChange={changeImage}
                  />
  
                  <Button
                    isLoading={loading}
                    w="full"
                    colorScheme={'yellow'}
                    type="submit"
                  >
                    Change
                  </Button>
                </VStack>
              </form>
            </Container>
          </ModalBody>
  
          <ModalFooter>
            <Button mr="3" onClick={closeHandler}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  


   