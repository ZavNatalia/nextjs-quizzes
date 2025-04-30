import { quizzes } from '@/data/quizzes'
import NextLink from 'next/link'
import { Box, Heading, Link } from '@chakra-ui/react'

export default function QuizIndexPage() {
    return (
        <Box p={6}>
            <Heading size="lg" mb={4}>Выбери тест:</Heading>
            {quizzes.map(({ slug, title }) => (
                <Box key={slug} mb={2}>
                    <Link as={NextLink} href={`/quiz/${slug}`} color="primary">
                        {title}
                    </Link>
                </Box>
            ))}
        </Box>
    )
}
