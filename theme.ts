import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    colors: {
        brand: {
            50: '#e3f2ff',
            100: '#b3d4ff',
            200: '#81b8ff',
            300: '#4e9cff',
            400: '#1c80ff',
            500: '#0066e0', // основной акцент
            600: '#004fb0',
            700: '#003880',
            800: '#002250',
            900: '#000c29',
        },
    },
    semanticTokens: {
        colors: {
            text: {
                default: 'gray.800',
                _dark: 'gray.100',
            },
            bg: {
                default: 'white',
                _dark: 'gray.900',
            },
            subtleBg: {
                default: 'gray.100',
                _dark: 'gray.700',
            },
            border: {
                default: 'gray.400',
                _dark: 'gray.500',
            },
            primary: {
                default: 'brand.500',
                _dark: 'brand.300',
            },
        },
    },
    components: {
        Button: {
            variants: {
                solid: (props: any) => {
                    if (props.colorScheme === 'brand') {
                        return {
                            bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.400',
                            color: 'white',
                            _hover: {
                                bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
                            },
                            _active: {
                                bg: props.colorMode === 'dark' ? 'brand.100' : 'brand.700',
                            },
                        };
                    }
                },
            },
        },
    },
});

export default theme;
