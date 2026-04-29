import { Helmet } from 'react-helmet';
import {
    Box,
    Card,
    CardBody,
    Container,
    Heading,
    HStack,
    Icon,
    Text,
    VStack,
    Wrap,
    WrapItem,
    useColorMode,
} from '@chakra-ui/react';
import {
    SiPython,
    SiGo,
    SiC,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiPostgresql,
    SiMongodb,
    SiJenkins,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiFlask,
    SiSpring,
    SiJest,
    SiPostman,
    SiRedux,
    SiGit,
    SiNextdotjs,
    SiDocker,
    SiFigma,
} from 'react-icons/si';
import { FaNode, FaDatabase, FaJava } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const categories1 = [
    {
        title: 'Languages',
        skills: [
            { label: 'Java', icon: FaJava },
            { label: 'Python', icon: SiPython },
            { label: 'Go', icon: SiGo },
            { label: 'C', icon: SiC },
            { label: 'JavaScript', icon: SiJavascript },
            { label: 'TypeScript', icon: SiTypescript },
            { label: 'HTML', icon: SiHtml5 },
            { label: 'CSS', icon: SiCss3 },
        ],
    },
    {
        title: 'Databases & Data Technologies',
        skills: [
            { label: 'PostgreSQL', icon: SiPostgresql },
            { label: 'MongoDB', icon: SiMongodb },
            { label: 'SQL / NoSQL', icon: FaDatabase },
            { label: 'Node.js', icon: FaNode },
        ],
    },
];

const categories2 = [
    {
        title: 'Frameworks / Libraries / Tools',
        skills: [
            { label: 'React', icon: SiReact },
            { label: 'Tailwind CSS', icon: SiTailwindcss },
            { label: 'Flask', icon: SiFlask },
            { label: 'Express.js', icon: SiExpress },
            { label: 'Spring Boot', icon: SiSpring },
            { label: 'Jest', icon: SiJest },
            { label: 'Postman', icon: SiPostman },
            { label: 'Redux', icon: SiRedux },
            { label: 'Git', icon: SiGit },
            { label: 'Jenkins', icon: SiJenkins },
            { label: 'Next.js', icon: SiNextdotjs },
            { label: 'Docker', icon: SiDocker },
            { label: 'Figma', icon: SiFigma },
        ],
    },
];

export default function Skills() {
    const { colorMode } = useColorMode();

    const cardStyle = {
        borderRadius: 'xl',
        height: '300px',
        overflow: 'hidden',
        shadow: 'md',
        bg: colorMode === 'dark' ? '#1f222e' : '#c8dcea',
        backdropFilter: 'blur(1px)',
        p: 6,
        width: '100%',
    };

    // const cardStyle2 = {
    //     borderRadius: 'xl',
    //     height: '375px',
    //     overflow: 'hidden',
    //     shadow: 'md',
    //     bg: colorMode === 'dark' ? '#1f222e' : '#c8dcea',
    //     backdropFilter: 'blur(1px)',
    //     p: 6,
    //     justifyContent: "center"
    // };

    return (
        <>
            <Helmet>
                <title>Skills | Jaeyong Lee</title>
            </Helmet>
            <Container maxWidth="900px" centerContent pt="100px" pb="60px">
            <Heading mb="6">Skills</Heading>
            <HStack align="center">
                <Card {...cardStyle}>
                    <CardBody>
                        <VStack spacing="6" align="start">
                            {categories1.map(category => (
                                <Box key={category.title} width="100%">
                                    <Heading size="md" mb="5">
                                        {category.title}
                                    </Heading>
                                    <Wrap spacing="20px">
                                        {category.skills.map(({ label, icon: IconComponent }) => (
                                            <WrapItem key={label}>
                                                <VStack spacing={1}>
                                                    {IconComponent ? (
                                                        <Icon as={IconComponent} fontSize="20px" />
                                                    ) : (
                                                        <Box h="28px" />
                                                    )}
                                                    <Text fontSize="sm" textAlign="center">
                                                        {label}
                                                    </Text>
                                                </VStack>
                                            </WrapItem>
                                        ))}
                                    </Wrap>
                                </Box>
                            ))}
                        </VStack>
                    </CardBody>
                </Card>

                <Card {...cardStyle}>
                    <CardBody>
                        <VStack spacing="6" align="start">
                            {categories2.map(category => (
                                <Box key={category.title} width="100%">
                                    <Heading size="md" mb="5">
                                        {category.title}
                                    </Heading>
                                    <Wrap spacing="20px">
                                        {category.skills.map(({ label, icon: IconComponent }) => (
                                            <WrapItem key={label}>
                                                <VStack spacing={1}>
                                                    {IconComponent ? (
                                                        <Icon as={IconComponent} fontSize="20px" />
                                                    ) : (
                                                        <Box h="28px" />
                                                    )}
                                                    <Text fontSize="sm" textAlign="center">
                                                        {label}
                                                    </Text>
                                                </VStack>
                                            </WrapItem>
                                        ))}
                                    </Wrap>
                                </Box>
                            ))}
                        </VStack>
                    </CardBody>

                    {/* <VStack
                        as="ul"
                        spacing={4}
                        pl="1em"
                        style={{ listStyleType: 'disc' }}
                        align="start"
                    >
                        <Text as="li" fontSize="lg">
                            To the left, I've listed the skills I have experience with in no
                            particular order.
                        </Text>
                        <Text as="li" fontSize="lg">
                            I'm always eager to learn and have regularly picked up new skills in
                            previous roles.
                        </Text>
                        <Text as="li" fontSize="lg">
                            I really enjoy aspects of both backend and frontend, and I appreciate
                            the challenges that each comes with.
                        </Text>
                    </VStack> */}
                </Card>
            </HStack>
            </Container>
        </>
    );
}
