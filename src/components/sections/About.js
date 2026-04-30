import { Helmet } from 'react-helmet';
import { Container, Text, VStack, Box, Image, Flex } from '@chakra-ui/react';
import FadeIn from '../global/FadeIn';

const bioItems = [
    {
        emoji: '\u{1F468}‍\u{1F4BB}',
        text: "I'm in my final year at UofT! Over the years, I've come to find joy in building useful software.",
    },
    {
        emoji: '\u{1F4CD}',
        text: 'I was born in South Korea but now I call Toronto home. Despite growing up in the suburbs, I love the city.',
    },
    {
        emoji: '\u{1F9E0}',
        text: "I'm particularly interested in backend and infrastructure development, especially building APIs, developer tooling, and internal platforms.",
    },
    {
        emoji: '\u{1F331}',
        text: "In my free time, music is a main hobby of mine. I play guitar and drums, and some of my favourite artists include The Beatles, wave to earth, and John Mayer.",
    },
    {
        emoji: '\u{1F3C0}',
        text: 'I also love playing basketball, taking pictures, and going on runs to explore new neighborhoods.',
    },
];

export default function About() {
    return (
        <>
            <Helmet>
                <title>Biography | Jaeyong Lee</title>
            </Helmet>
            <Container maxWidth="900px" centerContent pt="100px" pb="60px">
                <FadeIn delay={0}>
                    <Text fontSize="3xl" fontWeight="bold" mb="6">
                        biography
                    </Text>
                </FadeIn>

                <VStack spacing="16px" align="center" flexWrap="wrap" justify="center">
                    <FadeIn delay={0.1}>
                        <Image
                            src="/headshot.jpg"
                            alt="dang the image won't load :("
                            borderRadius="3xl"
                            boxSize={['190px', '265px']}
                            objectFit="cover"
                            shadow="lg"
                        />
                    </FadeIn>

                    <Box p="30px" flex="1">
                        <VStack spacing="20px" align="start" fontSize="lg">
                            {bioItems.map((item, i) => (
                                <FadeIn key={i} delay={0.2 + i * 0.07} style={{ width: '100%' }}>
                                    <Flex align="start">
                                        <Box fontSize="md" mr="12px" pt="3px">
                                            {item.emoji}
                                        </Box>
                                        <Text fontSize="md">{item.text}</Text>
                                    </Flex>
                                </FadeIn>
                            ))}
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </>
    );
}
