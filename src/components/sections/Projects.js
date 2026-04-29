import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    VStack,
    useColorMode,
    Button,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, subtitle, description, image, projectLink, onImageClick }) => {
    const { colorMode } = useColorMode();

    return (
        <Flex overflow="hidden" w="100%" h="190px">
            <Image
                src={image}
                alt={title}
                objectFit="cover"
                w={['130px', '230px', '300px']}
                minW={['130px', '230px', '300px']}
                cursor="pointer"
                onClick={() => onImageClick(image, title)}
                flexShrink={0}
                borderRadius="xl"
            />

            <Flex
                direction="column"
                justify="space-between"
                p={['14px', '20px']}
                flex="1"
                overflow="hidden"
            >
                <Box>
                    <Heading size="md">{title}</Heading>
                    {subtitle && (
                        <Text
                            fontSize="sm"
                            mt="6px"
                            color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                            letterSpacing="wide"
                        >
                            {subtitle}
                        </Text>
                    )}
                    <Text fontSize="sm" mt="10px" lineHeight="tall">
                        {description}
                    </Text>
                </Box>

                {projectLink.startsWith('http') && (
                    <Box mt="14px">
                        <Button
                            as="a"
                            href={projectLink}
                            target="_blank"
                            leftIcon={<FaGithub />}
                            colorScheme="gray"
                            size="sm"
                        >
                            GitHub
                        </Button>
                    </Box>
                )}
            </Flex>
        </Flex>
    );
};

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleImageClick = (image, title) => {
        setSelectedImage(image);
        setSelectedTitle(title);
        onOpen();
    };

    const cards = [
        {
            title: 'Caspr',
            subtitle: 'Next.js, Firebase, TypeScript, React, Three.js, Vercel',
            description:
                'Interactive web app and collaboration platform for exploring and analyzing causal diagrams in 3D.',
            image: '/images/caspr-ui.jpg',
            projectLink: 'https://github.com/jaeyonglee3/Caspr',
        },
        {
            title: 'EasyChat',
            subtitle: 'MongoDB, Express.js, React, Node.js, Typescript, Socket.IO',
            description:
                'A comprehensive instant messaging application featuring a RESTful backend and modern UI.',
            image: '/images/easychat-ss.jpg',
            projectLink: 'https://github.com/jaeyonglee3/EasyChat',
        },
        {
            title: 'ScanEats',
            subtitle: 'Python, TensorFlow, Flask, React',
            description:
                'A full-stack ML app built on a CNN I trained w/ TensorFlow to rate fruit freshness using the webcam.',
            image: '/images/scaneats.jpg',
            projectLink: 'https://github.com/jaeyonglee3/ScanEats',
        },
        {
            title: 'MelodyMatch',
            subtitle: 'Python, Plotly, Bottle Web Framework, Tkinter',
            description:
                'Uses Spotify account data + a decision tree recommendation algorithm to make excellent music recommendations.',
            image: '/images/melody-logo.jpg',
            projectLink: 'https://github.com/jaeyonglee3/MelodyMatch',
        },
        {
            title: 'JoltEd Chrome Extension',
            subtitle: 'JavaScript, React, Chrome API, OpenAI API',
            description:
                'Instant personalized explanation generation + example provisioning of educational content on any webpage.',
            image: '/images/jolted-ss.jpg',
            projectLink:
                'https://github.com/ACCELab-UofT/JoltEd-Chrome-Extension?tab=readme-ov-file',
        },
        {
            title: 'Rotman Commerce HR Association Website',
            subtitle: 'HTML, CSS, JavaScript',
            description:
                'A website created for the Rotman Commerce Human Resources student group at the University of Toronto.',
            image: '/images/rchra-site.jpg',
            projectLink: 'https://github.com/jaeyonglee3/RCHRA-Website',
        },
        {
            title: 'Habitual (iOS App)',
            subtitle: 'Swift',
            description:
                'Helps users create and track daily habits, set repetition goals, and monitor weekly progress.',
            image: '/images/habitual.jpg',
            projectLink: 'https://github.com/jaeyonglee3/habitual-app',
        },
    ];

    return (
        <>
        <Helmet>
            <title>Projects | Jaeyong Lee</title>
        </Helmet>
        <Container centerContent pt="100px" pb="60px" maxWidth="900px">
            <Text fontSize="3xl" fontWeight="bold" mb="6">
                projects
            </Text>

            <VStack spacing="36px" align="stretch" w="100%">
                {cards.map((card, index) => (
                    <ProjectCard key={index} {...card} onImageClick={handleImageClick} />
                ))}
            </VStack>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
                <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(3px)" />
                <ModalContent bg="gray.200">
                    <ModalCloseButton />
                    <ModalBody p="0">
                        <Image
                            src={selectedImage}
                            alt={selectedTitle}
                            w="100%"
                            h="auto"
                            objectFit="contain"
                            borderRadius="md"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
        </>
    );
}
