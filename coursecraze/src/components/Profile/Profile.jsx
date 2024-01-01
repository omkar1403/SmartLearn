import { Avatar, Button, Container, HStack, Heading, Stack, VStack, Text, Image,Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody,Input, ModalHeader, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileuploadCSS } from '../Auth/Register'

const Profile = () => {
    const user = {
        name: "Omkar Deshmukh",
        email: "omkar@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: "user",
        subscription: {
            status: "active"
        },
        playlist: [{
            course: "science", poster: "https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain",

        }
        ]
    }

    const {isOpen,onClose,onOpen}=useDisclosure();

    const removeFromPlaylistHandler = id => {
        console.log(id);
    }

    const changeImageSubmitHandler=(e,image)=>{
        e.preventDefault();
        
    }

    return (
        <Container minH={'95vh'} maxW={'container.lg'} py="8" >
            <Heading children="Profile" m="8" textTransform={'uppercase'} />
            <Stack justifyContent={'flex-start'} direction={['column', 'row']} alignItems={'center'} spacing={['8', '16']} padding={'8'}>
                <VStack>
                    <Avatar boxSize={'48'} />
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
                            {user.subscription.status === "active" ? (
                                <Button color={'yellow.500'} variant="unstyled">Cancel Subscription</Button>
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

                                        <Button onClick={() => removeFromPlaylistHandler(element.course)}><RiDeleteBin7Fill /></Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }

<ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>


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
  


   