'use client';

import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import theme from '@/theme';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    const colorModeManager =
        typeof window === 'undefined' ? cookieStorageManagerSSR('') : localStorageManager;

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
}
