import { Box, Flex, Text, Button, useColorMode, VStack, Link } from '@chakra-ui/react';
import { FiArrowUpCircle } from 'react-icons/fi';

export default function Footer() {
    const { colorMode } = useColorMode();

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
                <VStack spacing={1} align="start">
                    <Text fontSize="sm">last updated: April 2026</Text>
                    <Link
                        href="https://github.com/jaeyonglee3/personal-website"
                        isExternal
                        fontSize="sm"
                        color={colorMode === 'dark' ? 'blue.200' : 'blue.400'}
                        _hover={{ textDecoration: 'underline' }}
                    >
                        I built this site with React, check out the repo here!
                    </Link>
                </VStack>

                <VStack spacing={1} align="end">
                    <Button
                        variant="ghost"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        rightIcon={<FiArrowUpCircle fontSize={20} />}
                        size={'sm'}
                    >
                        Back to Top
                    </Button>
                    <Text fontSize="sm">
                        Feel free to contact me for anything, I always love to chat!
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
}
