import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Text,
    VStack,
    useColorMode,
    Button,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';
import FadeIn from '../global/FadeIn';

const ExperienceCard = ({ title, roleName, location, dates, description, image, detailLink }) => {
    const { colorMode } = useColorMode();

    return (
        <Flex overflow="hidden" w="100%" h="190px">
            <Image
                src={image}
                alt={title}
                objectFit="cover"
                w={['130px', '230px', '300px']}
                minW={['130px', '230px', '300px']}
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

                    <Flex align="baseline" gap="8px" mt="6px" flexWrap="wrap">
                        {roleName && (
                            <Text
                                fontSize="sm"
                                color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                            >
                                {roleName}
                            </Text>
                        )}
                        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.500' : 'gray.400'}>
                            ·
                        </Text>

                        {dates && (
                            <Text
                                fontSize="sm"
                                color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                                letterSpacing="wide"
                            >
                                {dates}
                            </Text>
                        )}

                        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.500' : 'gray.400'}>
                            ·
                        </Text>

                        {location && (
                            <Text
                                fontSize="sm"
                                color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                                letterSpacing="wide"
                            >
                                {location}
                            </Text>
                        )}
                    </Flex>

                    <Text fontSize="sm" mt="10px" lineHeight="tall">
                        {description}
                    </Text>
                </Box>

                {/* {detailLink?.startsWith('/experience') && (
                    <Box mt="14px">
                        <Button
                            as="a"
                            href={detailLink}
                            rightIcon={<FaArrowRight />}
                            colorScheme="gray"
                            size="xs"
                        >
                            Read More
                        </Button>
                    </Box>
                )} */}
            </Flex>
        </Flex>
    );
};

export default function Experience() {
    const cards = [
        {
            title: 'HubSpot',
            roleName: 'Software Engineer Intern',
            location: 'Cambridge, MA',
            dates: 'May 2026 – Aug 2026',
            description:
                'Joining as a Backend Software Engineer Intern to develop and scale infrastructure for customer support, ticket resolution, and response workflows for the core Service Hub product.',
            image: '/images/hubspot-logo.jpg',
            detailLink: '/experience/hubspot',
        },
        {
            title: 'Intuit',
            roleName: 'Software Engineer Intern',
            location: 'Toronto, ON',
            dates: 'Sep 2025 – Dec 2025',
            description:
                'Drove developer productivity at scale by building and improving internal tooling, infrastructure, and automation for API development, documentation, and deployment used across thousands of engineers.',
            image: '/images/intuit-logo.jpg',
            detailLink: '/experience/intuit',
        },
        {
            title: 'PointClickCare',
            roleName: 'Software Engineer Intern',
            location: 'Toronto, ON',
            dates: 'Jan 2025 – Aug 2025',
            description:
                'Backend development (Java & Spring Boot) for medication management and patient care coordination.',
            image: '/images/pcc-logo.jpg',
            detailLink: '/experience/pointclickcare',
        },
        {
            title: 'Geotab',
            roleName: 'Software Developer Intern',
            location: 'Toronto, ON',
            dates: 'May 2024 – Dec 2024',
            description:
                'Full-stack development (Go, Node.js, React) for the Intelligent Transportation Analytics product.',
            image: '/images/geotab-logo.jpg',
            detailLink: '/experience/geotab',
        },
        {
            title: 'Intelligent Adaptive Interventions Lab',
            roleName: 'Software Developer',
            location: 'Toronto, ON',
            dates: 'May 2023 – Mar 2024',
            description:
                'Built AI tools for students, deploying and using them to collect data and feedback for research.',
            image: '/images/iai-logo.jpg',
            detailLink: '/experience/iai',
        },
        {
            title: 'Department of Computer Science, University of Toronto',
            roleName: 'Software Developer',
            location: 'Toronto, ON',
            dates: 'May 2023 – Aug 2023',
            description:
                "Worked on Prof. David Liu's Students Developing Software (SDS) team on the Courseography project.",
            image: '/images/sds-logo.jpg',
            detailLink: '/experience/sds',
        },
        {
            title: 'Serv2U',
            roleName: 'Full-Stack Developer',
            location: 'Remote',
            dates: 'Jan 2023 – May 2023',
            description:
                'Helped develop an online marketplace for people to order meals made by homecooks and have them delivered to their doorstep.',
            image: '/images/s2u-logo.jpg',
            detailLink: '/experience/serv2u',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Experience | Jaeyong Lee</title>
            </Helmet>
            <Container centerContent pt="100px" pb="60px" maxWidth="900px">
                <FadeIn delay={0}>
                    <Text fontSize="3xl" fontWeight="bold" mb="6">
                        experience
                    </Text>
                </FadeIn>

                <VStack spacing="36px" align="stretch" w="100%">
                    {cards.map((card, index) => (
                        <FadeIn key={index} delay={index * 0.07} style={{ width: '100%' }}>
                            <ExperienceCard {...card} />
                        </FadeIn>
                    ))}
                </VStack>
            </Container>
        </>
    );
}
