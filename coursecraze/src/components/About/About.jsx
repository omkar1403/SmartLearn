import { Avatar, Container, Heading, Stack, VStack, Text, Button,  Box, HStack } from '@chakra-ui/react'
import React from 'react'
import introVideo from "../../videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri';
import {Link} from 'react-router-dom'
import termsAndCondition from '../../components/Docs/termsAndCondition';



const Founder = () => (
    <Stack direction={["Column", "row"]} spacing={["4", "16"]} padding={"8"}>
        <VStack>
            <Avatar boxSize={['40', '48']} />
            <Text children="Co-founder" opacity={0.7} />
        </VStack>

        <VStack justify={"center"} alignItems={["center,flex-start"]}>
            <Heading children="Omkar Deshmukh" size={['md', 'xl']} />
            <Text children={`Hello , I am a Full-Stack developer...Our Mission is to provide a quality content at resonable price.`} />
        </VStack>
    </Stack>
);

const TandC = ({ termsAndCondition }) => (
    <Box>
        <Heading size={"md"} children="Terms & Condition" textAlign={["center", "left"]} my="4" />
        <Box h="sm" p="4" overflowY={'scroll'}>
            <Text fontFamily={'heading'} letterSpacing={"widest"} textAlign={['center', 'left']}>{termsAndCondition}</Text>
            <Heading my="4" size="xs" children="Refund only aaplicable for cancellation within 7 days" />
        </Box>
    </Box>
)


const VideoPlayer = () => (
    <Box>
        <video autoPlay controls src={introVideo} controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback></video>
    </Box>
)

const About = () => {
    return (
        <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
            <Heading children="About us" textAlign={['center', 'left']} />
            <Founder />
            <Stack m="8" direction={["column", "row"]} alignItems="center">
                <Text fontFamily={'cursive'} m="8" textAlign={["center", "left"]}>
                    We are a video streaming platform with some premium courses available only for premium users.
                </Text>
                <Link to="/subscribe">
                    <Button variant={"ghost"} colorScheme='yellow'>Checkout our Plan</Button>
                </Link>
            </Stack>
            <Text children="play the video for more information" fontFamily={'cursive'} textAlign={["center"]} my={'5'} />

            <VideoPlayer />

            <TandC termsAndCondition={termsAndCondition} />

            <HStack my="4" p={"4"}>
                <RiSecurePaymentFill />
                <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children={"Payment is secured by Rezorpay"} />

            </HStack>
        </Container>
    )
}

export default About