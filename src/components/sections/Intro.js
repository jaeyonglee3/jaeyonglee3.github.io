import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import SocialMedia from '../global/SocialMedia';

export default function Landing() {
    return (
        <Container
            as="section"
            overflowX="hidden"
            maxW="900px"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            centerContent
        >
            <VStack spacing={3} align="center" textAlign="center">
                <Heading size="xl" pt={8}>
                    <TypeAnimation sequence={['nice to meet you!']} speed={10} repeat={0} />
                </Heading>

                <Text fontSize="xl" fontWeight="bold">
                    I'm Jaeyong, a Software Engineer and CS student the University of Toronto.
                </Text>

                <Text fontSize="md">
                    This is my personal site, where I display my most recent projects and
                    experiences. I'm always happy to chat with anyone about anything, so please feel
                    free to reach out!
                </Text>

                <VStack pt={4} spacing={5}>
                    <SocialMedia />
                    <Heading size="md">🇨🇦 🇰🇷</Heading>
                </VStack>
            </VStack>
        </Container>
    );
}
