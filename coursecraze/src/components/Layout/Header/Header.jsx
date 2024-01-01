import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, HStack, DrawerHeader, DrawerOverlay, VStack, useDisclosure} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {  useColorMode } from '@chakra-ui/react';


const LinkButton = ({ url = "/", title = "Home",onClose}) =>
(
    <Link onClick={onClose} to={url}>
        <Button variant={'ghost'}>
            {title}
        </Button>
    </Link>
)

const user={
    role:'admin',
};



const Header =({isAuthenticated =true,user})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();

const LogoutHandler=()=>{
    onClose();
    console.log('Logout');
    
};

    return (
        <>
            <ColorModeSwitcher toggleMode='dark'/>
            <Button
                onClick={onOpen}
                colorScheme={"yellow"} width="12" height={'12'} rounded="full" position="fixed" top="6" left="6" zIndex={"overlay"}>
                <RiMenu5Fill />
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(3px)'}/>

                <DrawerContent>

                    <DrawerHeader borderBottomWidth={'2px'}>
                        COURSEBUNDLER
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={"4"} alignItems={"flex-start"} >
                            <LinkButton
                             onClick={onClose} 
                             url="/" title="Home" />
                            <LinkButton 
                            onClick={onClose} 
                            url="/courses" title="Browse All Courses" />
                            <LinkButton 
                            onClick={onClose} 
                            url="/request" title="Request a Course" />
                            <LinkButton 
                            onClick={onClose} 
                            url="/contact" title="Contact Us" />
                            <LinkButton 
                            onClick={onClose} url="/about" title="About Us" />

                            <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">

                                {isAuthenticated ? (<>

                                    <VStack>

                                        <HStack>
                                            <Link onClick={onClose} to="/profile">
                                                <Button varient={'ghost'} colorScheme={"yellow"}>
                                                    Profile
                                                </Button>
                                            </Link>
                                            <Button varient={'ghost'} onClick={LogoutHandler}>
                                                <RiLogoutBoxLine />
                                                Logout
                                            </Button>
                                            {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}

                                        </HStack>

                                        {user && user.role==='admin' && (
                                         <Link onClick={onClose} to="/admin/dashboard">
                                            <Button colorScheme={'purple'} varient="ghost">
                                      <RiDashboardFill style={{margin:'4px'}} />
                                      Dashboard
                                            </Button>
                                         </Link>
                                        ) }
                                    </VStack>
                                </>) : (<>
                                    <Link onClick={onClose} to="/login">
                                        <Button colorScheme={"yellow"}>
                                            Login     
                                        </Button>
                                    </Link>

                                    <p>OR</p>

                                    <Link onClick={onClose} to="/register">
                                        <Button colorScheme={"yellow"}>
                                            Sign Up
                                        </Button>
                                    </Link>


                                </>)}

                            </HStack>

                            

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>

    )
};

export default Header;




