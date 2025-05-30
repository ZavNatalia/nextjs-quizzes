'use client';

import React, { useEffect, useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const levels = ['junior', 'middle', 'senior'] as const;

export default function LevelListWithProgress({ slug }: { slug: string }) {
    const [passedLevels, setPassedLevels] = useState<string[]>([]);

    useEffect(() => {
        const passed = levels.filter(
            (level) => localStorage.getItem(`quiz-${slug}-${level}`) === 'passed'
        );
        setPassedLevels(passed);
    }, [slug]);

    return (
        <VStack spacing={4} align="stretch">
            {levels.map((level) => (
                <Button
                    key={level}
                    as={Link}
                    href={`/quiz/${slug}/${level}`}
                    colorScheme="brand"
                    variant="outline"
                    size="lg"
                >
                    {level === 'junior' && '👶 Junior'}
                    {level === 'middle' && '🧑‍💻 Middle'}
                    {level === 'senior' && '🧙‍♂️ Senior'}
                    {passedLevels.includes(level) && ' ✅'}
                </Button>
            ))}
        </VStack>
    );
}
