import {
    Box,
    Flex,
    Divider,
    HStack,
    VStack,
    Button,
    Spacer,
    useColorMode,
    useDisclosure,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../global/ColorModeSwitcher';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaBars } from 'react-icons/fa';

const menuItems = [
    { label: 'biography', to: '/biography' },
    { label: 'experience', to: '/experience' },
    { label: 'projects', to: '/projects' },
    { label: 'photos', to: '/photos' },
];

export default function Navbar() {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const bg = colorMode === 'dark' ? '#0a0b0f' : '#F7FAFC';

    const openResume = () => {
        window.open('/Jaeyong Lee Resume.pdf', '_blank');
    };

    const handleMobileNav = to => {
        navigate(to);
        onClose();
    };

    return (
        <Box width="100vw" position="fixed" zIndex={2} bg={bg}>
            <Flex as="nav" px="24px" py="10px" alignItems="center" maxW="900px" mx="auto">
                {/* Logo — always visible */}
                <Button
                    as={RouterLink}
                    to="/"
                    fontWeight="normal"
                    variant="ghost"
                    size="sm"
                    fontSize="sm"
                >
                    jaeyong's portfolio
                </Button>

                {/* Desktop nav links */}
                <Divider
                    orientation="vertical"
                    height="20px"
                    mx="10px"
                    borderColor="gray.500"
                    display={{ base: 'none', md: 'flex' }}
                />
                <HStack spacing="4px" display={{ base: 'none', md: 'flex' }}>
                    {menuItems.map(item => (
                        <Button
                            key={item.label}
                            as={RouterLink}
                            to={item.to}
                            variant="ghost"
                            size="sm"
                            fontSize="sm"
                        >
                            {item.label}
                        </Button>
                    ))}
                    <Button
                        onClick={openResume}
                        variant="ghost"
                        size="sm"
                        fontSize="md"
                        rightIcon={<FaExternalLinkAlt fontSize={10} />}
                    >
                        resume
                    </Button>
                </HStack>

                <Spacer />
                <ColorModeSwitcher />

                {/* Mobile hamburger */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    icon={<FaBars />}
                    onClick={onOpen}
                    variant="ghost"
                    aria-label="Open menu"
                    size="sm"
                    ml={1}
                />
            </Flex>

            {/* Bottom border */}
            <Box maxW="900px" mx="auto" px="24px">
                <Box
                    borderBottom="1px solid"
                    borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.600'}
                />
            </Box>

            {/* Mobile drawer */}
            <Drawer isOpen={isOpen} onClose={onClose} placement="top" size="full">
                <DrawerOverlay />
                <DrawerContent height="auto" bg={bg}>
                    <DrawerCloseButton top="14px" right="20px" />
                    <DrawerBody pt="52px" pb={6} px="24px">
                        <VStack spacing={1} align="stretch">
                            {menuItems.map(item => (
                                <Button
                                    key={item.label}
                                    onClick={() => handleMobileNav(item.to)}
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    size="md"
                                    fontSize="md"
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                onClick={() => { openResume(); onClose(); }}
                                variant="ghost"
                                justifyContent="flex-start"
                                size="md"
                                fontSize="md"
                                rightIcon={<FaExternalLinkAlt fontSize={10} />}
                            >
                                resume
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
