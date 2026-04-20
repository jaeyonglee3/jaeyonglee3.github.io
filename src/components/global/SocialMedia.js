import { HStack, Link, Text, Divider, Icon, useToast } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const emailAddress = 'jaeyong.lee@mail.utoronto.ca';

const socialLinks = [
    {
        label: 'GitHub',
        icon: AiFillGithub,
        href: 'https://github.com/jaeyonglee3',
    },
    {
        label: 'LinkedIn',
        icon: AiFillLinkedin,
        href: 'https://www.linkedin.com/in/jaeyong-lee/',
    },
    {
        label: 'Email',
        icon: AiOutlineMail,
        isEmail: true,
    },
];

function SocialItem({ children, href, isEmail, onCopy }) {
    const sharedStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        opacity: 0.6,
        transition: 'opacity 0.15s',
        cursor: 'pointer',
        _hover: { opacity: 1, textDecoration: 'none' },
    };

    if (isEmail) {
        return (
            <HStack spacing="6px" sx={sharedStyle} onClick={onCopy}>
                {children}
            </HStack>
        );
    }

    return (
        <Link href={href} isExternal sx={sharedStyle}>
            {children}
        </Link>
    );
}

export default function SocialMedia() {
    const toast = useToast();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            toast({
                title: 'Email copied!',
                description: 'You can now paste it wherever you need.',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch {
            toast({
                title: 'Failed to copy',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <HStack
            spacing={4}
            divider={
                <Divider orientation="vertical" h="16px" borderColor="gray.500" />
            }
        >
            {socialLinks.map((social, i) => (
                <SocialItem
                    key={i}
                    href={social.href}
                    isEmail={social.isEmail}
                    onCopy={handleCopy}
                >
                    <Icon as={social.icon} fontSize="18px" />
                    <Text fontSize="sm" letterSpacing="wide">
                        {social.label}
                    </Text>
                </SocialItem>
            ))}
        </HStack>
    );
}
