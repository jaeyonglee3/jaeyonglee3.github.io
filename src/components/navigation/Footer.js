import { Box, Flex, Text, Button, useColorMode, VStack, Link } from '@chakra-ui/react';
import { FiArrowUpCircle } from 'react-icons/fi';
import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://webring.ca/embed.js';
        script.defer = true;
        document.head.appendChild(script);
        return () => document.head.removeChild(script);
    }, []);

    return (
        <Box w="100%" py={4} mt="auto">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
                gap={2}
                maxW="900px"
                mx="auto"
                px="24px"
            >
                {/* Left */}
                <VStack spacing={1} align="start">
                    <Text fontSize="sm" fontWeight="bold">
                        Last update: 04/2026
                    </Text>
                    {/* <Link
                        href="https://github.com/jaeyonglee3/personal-website"
                        isExternal
                        fontSize="sm"
                        color={colorMode === 'dark' ? 'blue.200' : 'blue.400'}
                        _hover={{ textDecoration: 'underline' }}
                    >
                        Check out this site's repo here!
                    </Link> */}
                </VStack>

                {/* Center — webring */}
                <Box display="flex" justifyContent="center">
                    <div
                        data-webring="ca"
                        data-member="jaeyong-lee"
                        style={{ '--webring-size': '16px' }}
                    ></div>
                </Box>

                {/* Right */}
                <VStack spacing={1} align="end">
                    <Button
                        variant="ghost"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        rightIcon={<FiArrowUpCircle fontSize={20} />}
                        size="sm"
                    >
                        Back to Top
                    </Button>
                </VStack>
            </Flex>
        </Box>
    );
}
