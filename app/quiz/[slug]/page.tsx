import React from 'react';
import { notFound } from 'next/navigation';
import { quizzes } from '@/data/quizzes';
import { Container, Heading, VStack, Button } from '@chakra-ui/react';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import LevelStatus from '@/components/LevelStatus';
import ResetProgressButton from '@/components/ResetProgressButton';

export function generateStaticParams() {
    return quizzes.map((q) => ({ slug: q.slug }));
}

const levels = ['junior', 'middle', 'senior'] as const;

export default async function QuizLevelPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const quiz = quizzes.find((q) => q.slug === slug);
    if (!quiz) return notFound();

    return (
        <Container maxW="4xl" py={10} flexGrow={1}>
            <BackButton />

            <VStack spacing={6} align="stretch" maxW="md" mx="auto">
                <Heading as="h1" size="lg" color="primary">
                    {quiz.title}: выбери уровень сложности
                </Heading>

                {levels.map((level) => (
                    <Button
                        key={level}
                        as={Link}
                        href={`/quiz/${quiz.slug}/${level}`}
                        colorScheme="brand"
                        variant="outline"
                        size="lg"
                    >
                        <LevelStatus slug={quiz.slug} level={level}>
                            {level === 'junior' && '👶 Junior'}
                            {level === 'middle' && '🧑‍💻 Middle'}
                            {level === 'senior' && '🧙‍♂️ Senior'}
                        </LevelStatus>
                    </Button>
                ))}

                <ResetProgressButton slug={quiz.slug} />
            </VStack>
        </Container>
    );
}
