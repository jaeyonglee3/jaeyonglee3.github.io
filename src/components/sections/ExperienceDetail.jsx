import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Image, Text, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const experienceData = {
    pointclickcare: {
        title: 'Software Engineer Intern @ PointClickCare',
        image: '/images/pcc-logo.jpg',
        content:
            'From January 2025 to August 2025, I worked as a Software Engineer Intern at PointClickCare, where I contributed to the development of healthcare software solutions. My role involved collaborating with cross-functional teams to enhance user experience and improve system performance.',
    },
    geotab: {
        title: 'Software Developer Intern @ Geotab',
        image: '/images/geotab-pic.jpg',
        content:
            'From January 2025 to August 2025, I worked as a Software Engineer Intern at PointClickCare, where I contributed to the development of healthcare software solutions. My role involved collaborating with cross-functional teams to enhance user experience and improve system performance.',
    },
};

export default function ExperienceDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const experience = experienceData[slug];

    if (!experience) return <Text>Experience not found.</Text>;

    return (
        <Container maxW="800px" py="60px" position="relative">
            <IconButton
                icon={<ArrowBackIcon />}
                onClick={() => navigate(-1)}
                aria-label="Back"
                position="absolute"
                top="20px"
                left="0"
                variant="ghost"
                colorScheme="gray"
                fontSize="20px"
            />

            {!experience ? (
                <Text>Experience not found.</Text>
            ) : (
                <>
                    <Heading mb={4} textAlign="center">
                        {experience.title}
                    </Heading>
                    <Image src={experience.image} borderRadius="xl" mb={6} />
                    <Text fontSize="lg" whiteSpace="pre-line">
                        {experience.content}
                    </Text>
                </>
            )}
        </Container>
    );
}
