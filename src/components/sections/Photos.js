import { Helmet } from 'react-helmet';
import { Box, Container, Image, Text, IconButton, CloseButton, Flex } from '@chakra-ui/react';
import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const photos = [
    { src: '/photos/blossoms.jpg', caption: 'Cherry blossoms' },
    { src: '/photos/campus.jpg', caption: 'The Toronto Magnetic and Meteorological Observatory' },
    { src: '/photos/gerstein.jpg', caption: 'Gerstein Library' },
    { src: '/photos/square.jpg', caption: 'Trinity College Quadrangle' },
    { src: '/photos/benjamin.jpg', caption: 'A paint store in downtown Toronto' },
    { src: '/photos/trinity.jpg', caption: 'Trinity College, University of Toronto' },
    // { src: '/photos/sunset.jpg', caption: 'A sunset on the beach in Georgian Bay, Ontario' },
    // { src: '/photos/puppy.jpg', caption: 'My dog when she was a puppy' },
    // {
    //     src: '/photos/rocks.jpg',
    //     caption: "A stack of rocks on the shores of Lake Ontario near Queen's University",
    // },
];

export default function Photos() {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const isOpen = lightboxIndex !== null;

    const close = useCallback(() => setLightboxIndex(null), []);
    const prev = useCallback(
        () => setLightboxIndex(i => (i - 1 + photos.length) % photos.length),
        []
    );
    const next = useCallback(() => setLightboxIndex(i => (i + 1) % photos.length), []);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = e => {
            if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, next, prev, close]);

    return (
        <>
            <Helmet>
                <title>Photos | Jaeyong Lee</title>
            </Helmet>
            <Container maxWidth="900px" pt="100px" pb="60px" px="24px">
                <Text fontSize="3xl" fontWeight="bold" mb="2" textAlign="center">
                    photos
                </Text>
                {/* <Text fontSize="md" mb="8" textAlign="center">
                    An assortment of pictures I've taken, some on my Fujifilm X-T3, which I
                    purchased recently second-hand hoping to learn the basics of photography. Hoping
                    to add many more soon!
                </Text> */}
                <Text fontSize="md" mb="8" textAlign="center">
                    An assortment of pictures I've taken on my Fujifilm X-T3, which I purchased
                    recently second-hand hoping to learn the basics of photography. Hoping to add
                    more soon!
                </Text>

                {photos.length === 0 ? (
                    <Text textAlign="center" opacity={0.4} fontSize="sm" mt="20">
                        No photos yet.
                    </Text>
                ) : (
                    <Box sx={{ columns: { base: '1', sm: '2', md: '3' }, columnGap: '12px' }}>
                        {photos.map((photo, i) => (
                            <Box
                                key={i}
                                role="group"
                                position="relative"
                                sx={{ breakInside: 'avoid', marginBottom: '12px' }}
                                cursor="pointer"
                                onClick={() => setLightboxIndex(i)}
                                borderRadius="lg"
                                overflow="hidden"
                            >
                                <Image
                                    src={photo.src}
                                    w="100%"
                                    display="block"
                                    transition="transform 0.25s"
                                    _groupHover={{ transform: 'scale(1.03)' }}
                                />

                                {/* Caption overlay */}
                                <Box
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    right={0}
                                    px="12px"
                                    pt="32px"
                                    pb="12px"
                                    background="linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)"
                                    opacity={0}
                                    transition="opacity 0.22s"
                                    _groupHover={{ opacity: 1 }}
                                >
                                    <Text
                                        color="white"
                                        fontSize="sm"
                                        fontWeight="medium"
                                        noOfLines={2}
                                    >
                                        {photo.caption || photo.src.split('/').pop()}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}

                {/* Lightbox */}
                {isOpen && (
                    <Box
                        position="fixed"
                        inset={0}
                        zIndex={200}
                        bg="blackAlpha.800"
                        backdropFilter="blur(16px)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        onClick={close}
                    >
                        <IconButton
                            icon={<FaChevronLeft />}
                            aria-label="Previous"
                            position="absolute"
                            left={4}
                            onClick={e => {
                                e.stopPropagation();
                                prev();
                            }}
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            color="white"
                            fontSize="20px"
                            size="lg"
                        />

                        <Image
                            src={photos[lightboxIndex].src}
                            maxH="90vh"
                            maxW="90vw"
                            objectFit="contain"
                            borderRadius="md"
                            onClick={e => e.stopPropagation()}
                        />

                        <IconButton
                            icon={<FaChevronRight />}
                            aria-label="Next"
                            position="absolute"
                            right={4}
                            onClick={e => {
                                e.stopPropagation();
                                next();
                            }}
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            color="white"
                            fontSize="20px"
                            size="lg"
                        />

                        <CloseButton
                            position="absolute"
                            top={4}
                            right={4}
                            size="lg"
                            color="white"
                            onClick={close}
                        />

                        <Flex
                            position="absolute"
                            bottom={5}
                            left="50%"
                            transform="translateX(-50%)"
                            direction="column"
                            align="center"
                            gap={1}
                        >
                            {photos[lightboxIndex].caption && (
                                <Text color="white" fontSize="sm" opacity={0.9}>
                                    {photos[lightboxIndex].caption}
                                </Text>
                            )}
                            <Text color="whiteAlpha.600" fontSize="xs">
                                {lightboxIndex + 1} / {photos.length}
                            </Text>
                        </Flex>
                    </Box>
                )}
            </Container>
        </>
    );
}
