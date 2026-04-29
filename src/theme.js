import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    semanticTokens: {
        colors: {
            bg: {
                default: '#F7FAFC',
                _dark: '#0a0b0f',
            },
        },
    },
    styles: {
        global: {
            'html, body': {
                fontFamily: `'Inter', sans-serif`,
                fontWeight: 300,
                fontStyle: 'normal',
                bg: 'bg',
                margin: 0,
                padding: 0,
            },
        },
    },
});

export default theme;
