'use client';

import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HStack,
    Link as ChakraLink,
    Spacer,
    IconButton,
    useColorMode,
    useColorModeValue,
    Box,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/quiz', label: 'Тесты' },
];

export default function HeaderNav() {
    const pathname = usePathname();
    const { colorMode, toggleColorMode } = useColorMode();

    const activeColor = useColorModeValue('primary', 'primary');
    const inactiveColor = useColorModeValue('gray.600', 'gray.300');

    return (
        <Box bg="subtleBg" w="full" zIndex={1} boxShadow="md" px={6}>
            <HStack as="nav" spacing={4} py={4} maxW="4xl" w="full" mx="auto" color="text">
                {navItems.map(({ href, label }) => (
                    <ChakraLink
                        as={NextLink}
                        key={href}
                        href={href}
                        fontWeight="medium"
                        color={pathname === href ? activeColor : inactiveColor}
                        _hover={{ textDecoration: 'underline' }}
                        aria-current={pathname === href ? 'page' : undefined}
                    >
                        {label}
                    </ChakraLink>
                ))}

                <Spacer />

                <IconButton
                    aria-label="Переключить тему"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    color="primary"
                />
            </HStack>
        </Box>
    );
}
