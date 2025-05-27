'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function BackButton() {
    const router = useRouter();

    return (
        <Button onClick={() => router.back()} variant="link" colorScheme="brand">
            <ArrowBackIcon mr={2} />
            Назад
        </Button>
    );
}
