import { Box, Flex, Divider, HStack, Button, Spacer, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../global/ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const menuItems = [
    { label: 'biography', to: '/biography' },
    { label: 'experience', to: '/experience' },
    { label: 'projects', to: '/projects' },
    { label: 'photos', to: '/photos' },
];

export default function Navbar() {
    const { colorMode } = useColorMode();
    const openResume = () => {
        window.open('/Jaeyong Lee Resume.pdf', '_blank');
    };

    return (
        <Box
            width="100vw"
            position="fixed"
            zIndex={2}
            bg={colorMode === 'dark' ? '#0a0b0f' : '#F7FAFC'}
        >
            <Flex as="nav" px="24px" py="10px" alignItems="center" maxW="900px" mx="auto">
                <Button
                    as={RouterLink}
                    to="/"
                    fontWeight="normal"
                    variant={'ghost'}
                    size={'sm'}
                    fontSize="sm"
                >
                    jaeyong's portfolio
                </Button>

                <Divider orientation="vertical" height="20px" mx="10px" borderColor="gray.500" />

                <HStack spacing={'4px'}>
                    {menuItems.map(item => (
                        <Button
                            key={item.label}
                            as={RouterLink}
                            to={item.to}
                            variant={'ghost'}
                            size={'sm'}
                            fontSize="sm"
                        >
                            {item.label}
                        </Button>
                    ))}
                    <Button
                        onClick={openResume}
                        variant={'ghost'}
                        size={'sm'}
                        fontSize="md"
                        rightIcon={<FaExternalLinkAlt fontSize={10} />}
                    >
                        resume
                    </Button>
                </HStack>

                <Spacer />
                <ColorModeSwitcher />
            </Flex>
            {/* Subtle line showing the content column width */}
            <Box maxW="900px" mx="auto" px="24px">
                <Box
                    borderBottom="1px solid"
                    borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.600'}
                />
            </Box>
        </Box>
    );
}
