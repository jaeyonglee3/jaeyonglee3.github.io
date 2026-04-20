import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Heading,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    SimpleGrid,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';

const ExperienceCard = ({ title, subtitle, description, image, projectLink, onImageClick }) => {
    const { colorMode } = useColorMode();

    const cardStyle = {
        borderRadius: 'xl',
        overflow: 'hidden',
        shadow: 'md',
        bg: colorMode === 'dark' ? '#1f222e' : '#c8dcea',
        backdropFilter: 'blur(1px)',
    };

    return (
        <Card sx={cardStyle}>
            <Image
                src={image}
                alt={title}
                objectFit="cover"
                h="160px"
                w="100%"
                cursor="pointer"
                onClick={() => onImageClick(image, title)}
            />

            <CardHeader pb="0">
                <Heading size="md">{title}</Heading>
                {subtitle && (
                    <Text fontSize="13px" mt="1">
                        {subtitle}
                    </Text>
                )}
            </CardHeader>

            <CardBody pt="10px" fontSize="sm">
                <Text>{description}</Text>
            </CardBody>

            <CardFooter pt="10px">
                {
                    projectLink.startsWith('http') && (
                        <Button
                            as="a"
                            href={projectLink}
                            leftIcon={<FaGithub />}
                            colorScheme="gray"
                            size="sm"
                        >
                            {'GitHub'}
                        </Button>
                    )

                    // Use below when experience details are ready
                    // <Button
                    //     as="a"
                    //     href={projectLink}
                    //     target={projectLink.startsWith('http') ? '_blank' : '_self'}
                    //     leftIcon={projectLink.startsWith('http') ? <FaGithub /> : <FaArrowRightLong />}
                    //     colorScheme="gray"
                    //     size="sm"
                    // >
                    //     {projectLink.startsWith('http') ? 'GitHub' : 'Read More'}
                    // </Button>
                }
            </CardFooter>
        </Card>
    );
};

export default function Experience() {
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
            title: 'PointClickCare (Internship)',
            subtitle: 'Software Engineer ⋅ Jan 2025 - Aug 2025',
            description:
                'Backend development (Java & Spring Boot) for medication management + patient care coordination.',
            image: '/images/pcc-logo.jpg',
            projectLink: '/experience/pointclickcare',
        },
        {
            title: 'Geotab (Internship)',
            subtitle: 'Software Developer ⋅ May 2024 - Aug 2024',
            description:
                'Full-stack development (Go, Node.js, React) for the Intelligent Transportation Analytics product.',
            image: '/images/geotab-pic.jpg',
            projectLink: '/experience/geotab',
        },
        {
            title: 'U of T Research Lab',
            subtitle: 'Software Developer ⋅ May 2023 - Mar 2024',
            description:
                'Built AI tools for students, deploying and using them to collect data and feedback for research.',
            image: '/images/iai-logo.jpg',
            githubLink: 'https://github.com/example/fittrack',
            projectLink: '/experience/iai',
        },
        {
            title: 'U of T CS Department',
            subtitle: 'Software Developer ⋅ May 2023 - Aug 2023',
            description:
                "Worked on Prof. David Liu's Students Developing Software (SDS) team on the Courseography project.",
            image: '/images/sds-logo.jpg',
            projectLink: '/experience/sds',
        },
        {
            title: 'Serv2U (Startup)',
            subtitle: 'Full-Stack Developer ⋅ Jan 2023 - May 2023',
            description:
                'Helped develop an online marketplace for people to order meals made by homecooks and have them delivered to their doorstep.',
            image: '/images/serv2u.jpg',
            projectLink: '/experience/pointclickcare',
        },
        // {
        //     title: 'Coming Soon!',
        //     subtitle: 'As of June 2025',
        //     description:
        //         "I'm working on a new full-stack project that implements RAG techniques for personalized learning experiences.",
        //     image: '/images/coming-soon.jpg',
        //     projectLink: '',
        // },
    ];

    return (
        <Container centerContent pt="100px" pb="60px" maxWidth="900px" h="100vh">
            <Heading mb="6">experience</Heading>
            {/* <Text mb="6" fontSize="lg" textAlign="center">
                Here, I've selected a few of my projects and experiences that I'm most proud of.
            </Text> */}

            <SimpleGrid spacing="20px" minChildWidth="300px" maxW="90vw">
                {cards.map((card, index) => (
                    <ExperienceCard key={index} {...card} onImageClick={handleImageClick} />
                ))}
            </SimpleGrid>

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
    );
}
