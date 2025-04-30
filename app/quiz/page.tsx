import React from 'react'
import { quizzes } from '@/data/quizzes'
import NextLink from 'next/link'
import { Box, Container, Heading, Link } from '@chakra-ui/react'

export default function QuizIndexPage() {
    return (
        <Container maxW="4xl" py={10} flexGrow={1} px={8}>
        <Heading size="lg" mb={4}>Выбери тест:</Heading>
            {quizzes.map(({ slug, title }) => (
                <Box key={slug} mb={2}>
                    <Link as={NextLink} href={`/quiz/${slug}`} color="primary">
                        {title}
                    </Link>
                </Box>
            ))}
        </Container>
    )
}
