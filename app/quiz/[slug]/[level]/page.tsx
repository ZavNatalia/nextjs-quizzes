import { notFound } from 'next/navigation';
import { quizzes } from '@/data/quizzes';
import QuizForm from '@/components/QuizForm';
import { Box, Container, Heading } from '@chakra-ui/react';
import BackButton from '@/components/BackButton';

export function generateStaticParams() {
    return quizzes.flatMap((q) =>
        ['junior', 'middle', 'senior'].map((level) => ({
            slug: q.slug,
            level,
        }))
    );
}

export default async function QuizPage({
    params,
}: {
    params: Promise<{ slug: string; level: 'junior' | 'middle' | 'senior' }>;
}) {
    const { slug, level } = await params;
    const quiz = quizzes.find((q) => q.slug === slug);
    const questions = quiz?.levels?.[level];

    if (!quiz || !questions) return notFound();

    return (
        <Container maxW="4xl" py={10} flexGrow={1}>
            <BackButton />
            <Box
                maxW="2xl"
                mx="auto"
                py={6}
                px={8}
                mt={4}
                bg="subtleBg"
                borderRadius="3xl"
                boxShadow="lg"
            >
                <Heading as="h1" size="xl" mb={6} color="primary">
                    {quiz.title}
                </Heading>

                <QuizForm
                    quiz={{ slug: quiz.slug, title: quiz.title, questions }}
                    level={level as 'junior' | 'middle' | 'senior'}
                />
            </Box>
        </Container>
    );
}
