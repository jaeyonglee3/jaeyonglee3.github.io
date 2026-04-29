import { Helmet } from 'react-helmet';
import { Container, Text, VStack, Box, Image, Flex } from '@chakra-ui/react';

export default function About() {
    return (
        <>
            <Helmet>
                <title>Biography | Jaeyong Lee</title>
            </Helmet>
            <Container maxWidth="900px" centerContent pt="100px" pb="60px">
                <Text fontSize="3xl" fontWeight="bold" mb="6">
                    biography
                </Text>

                <VStack spacing="16px" align="center" flexWrap="wrap" justify="center">
                    <Image
                        src="/headshot.jpg"
                        alt="dang the image won't load :("
                        borderRadius="3xl"
                        boxSize={['190px', '265px']}
                        objectFit="cover"
                        shadow="lg"
                    />

                    <Box p="30px" flex="1">
                        <VStack spacing="20px" align="start" fontSize="lg">
                            {[
                                {
                                    emoji: '👨‍💻',
                                    text: (
                                        <>
                                            I'm in my final year at UofT! Over the years, I've come
                                            to find joy in building useful software.
                                        </>
                                    ),
                                },
                                {
                                    emoji: '📍',
                                    text: (
                                        <>
                                            I was born in South Korea but now I call Toronto home.
                                            Despite growing up in the suburbs, I love the city.
                                        </>
                                    ),
                                },
                                {
                                    emoji: '🧠',
                                    text: (
                                        <>
                                            I’m particularly interested in{' '}
                                            <Text as="span" fontWeight="bold">
                                                backend
                                            </Text>{' '}
                                            and{' '}
                                            <Text as="span" fontWeight="bold">
                                                infrastructure
                                            </Text>{' '}
                                            development, especially building APIs, developer
                                            tooling, and internal platforms.
                                        </>
                                    ),
                                },
                                {
                                    emoji: '🌱',
                                    text: (
                                        <>
                                            In my free time, music is a main hobby of mine. I play
                                            guitar and drums, and some of my favourite artists
                                            include The Beatles, wave to earth, and John Mayer.
                                        </>
                                    ),
                                },
                                {
                                    emoji: '🏀',
                                    text: (
                                        <>
                                            I also love playing basketball, taking pictures, and
                                            going on runs to explore new neighborhoods.
                                        </>
                                    ),
                                },
                            ].map((item, i) => (
                                <Flex key={i} align="start">
                                    <Box fontSize="md" mr="12px" pt="3px">
                                        {item.emoji}
                                    </Box>
                                    <Text fontSize="md">{item.text}</Text>
                                </Flex>
                            ))}
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </>
    );
}
