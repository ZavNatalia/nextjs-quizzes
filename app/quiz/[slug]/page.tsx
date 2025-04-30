import React from 'react'
import { quizzes } from '@/data/quizzes'
import { notFound } from 'next/navigation'
import QuizForm from '@/components/QuizForm'
import { Box, Container, Heading } from '@chakra-ui/react'
import BackButton from '@/components/BackButton';

export async function generateStaticParams() {
    return quizzes.map((q) => ({slug: q.slug}))
}

export default async function QuizPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const quiz = quizzes.find((q) => q.slug === slug)

    if (!quiz) return notFound();

    return (
        <Container maxW="4xl" py={10} flexGrow={1}>
            <BackButton/>
            <Box
                maxW='2xl'
                mx='auto'
                py={6}
                px={8}
                mt={4}
                bg='subtleBg'
                borderRadius="3xl"
                boxShadow="lg"
            >
                <Heading as="h1" size="xl" mb={6} noOfLines={1} color="primary">
                    {quiz.title}
                </Heading>
                <QuizForm quiz={quiz}/>
            </Box>
        </Container>
    )
}
