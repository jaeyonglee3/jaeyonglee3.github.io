import { Container, Heading, Text, VStack, Box, Image, Flex, useColorMode } from '@chakra-ui/react';
export default function About() {
    const { colorMode } = useColorMode();

    return (
        <Container maxWidth="900px" centerContent pt="100px" pb="60px" h="100vh">
            <Heading mb="6">biography</Heading>

            <VStack spacing="40px" align="center" flexWrap="wrap" justify="center">
                <Box textAlign="center">
                    <Image
                        src="/headshot.jpg"
                        alt="dang the image won't load :( Imagine a beautiful sunset!"
                        borderRadius="xl"
                        boxSize={['215px', '290px']}
                        objectFit="cover"
                        shadow="lg"
                    />
                </Box>

                <Box
                    borderRadius="2xl"
                    bg={colorMode === 'dark' ? '#1f222e' : '#c8dcea'}
                    p="30px"
                    shadow="md"
                    backdropFilter="blur(1px)"
                    flex="1"
                >
                    <VStack spacing="20px" align="start" fontSize="lg">
                        {[
                            {
                                emoji: '👨‍💻',
                                text: (
                                    <>
                                        I'm in my 3rd year of CS at the University of Toronto and I
                                        have a passion for{' '}
                                        <Text as="span" fontWeight="bold">
                                            software development
                                        </Text>
                                        , especially when it comes to building meaningful products
                                        that make life a little easier.
                                    </>
                                ),
                            },
                            {
                                emoji: '📍',
                                text: (
                                    <>
                                        I was born in{' '}
                                        <Text as="span" fontWeight="bold">
                                            South Korea
                                        </Text>
                                        , grew up in Richmond Hill, Ontario, and now live in
                                        Toronto.
                                    </>
                                ),
                            },
                            {
                                emoji: '🧠',
                                text: (
                                    <>
                                        My interests include{' '}
                                        <Text as="span" fontWeight="bold">
                                            full-stack development
                                        </Text>
                                        ,{' '}
                                        <Text as="span" fontWeight="bold">
                                            system design
                                        </Text>
                                        , and{' '}
                                        <Text as="span" fontWeight="bold">
                                            developer tools
                                        </Text>
                                        . I'm always eager to learn the ins and outs of a project
                                        and about how things work behind the scenes.
                                    </>
                                ),
                            },
                            {
                                emoji: '💡',
                                text: (
                                    <>
                                        Lately I’ve been finding it fun to try out new AI tools and
                                        explore how they're changing the way we build. From rapid
                                        prototyping to smarter debugging, there's never been a
                                        better time to be a developer.
                                    </>
                                ),
                            },
                            {
                                emoji: '🌱',
                                text: (
                                    <>
                                        In my free time,{' '}
                                        <Text as="span" fontWeight="bold">
                                            music
                                        </Text>{' '}
                                        is a main hobby of mine. I play guitar and drums, and some
                                        of my favourite artists include The Beatles, wave to earth,
                                        and John Mayer. I also enjoy{' '}
                                        <Text as="span" fontWeight="bold">
                                            basketball
                                        </Text>{' '}
                                        and{' '}
                                        <Text as="span" fontWeight="bold">
                                            running
                                        </Text>
                                        .
                                    </>
                                ),
                            },
                        ].map((item, i) => (
                            <Flex key={i} align="start">
                                <Box fontSize="xl" mr="12px" pt="3px">
                                    {item.emoji}
                                </Box>
                                <Text>{item.text}</Text>
                            </Flex>
                        ))}
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}
