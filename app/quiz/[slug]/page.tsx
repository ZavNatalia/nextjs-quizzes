import { quizzes } from '@/data/quizzes'
import { notFound } from 'next/navigation'
import QuizForm from '@/components/QuizForm'
import { Box, Container, Heading, Link } from '@chakra-ui/react'

export async function generateStaticParams() {
    return quizzes.map((q) => ({ slug: q.slug }))
}

export default async function QuizPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const quiz = quizzes.find((q) => q.slug === slug)

    if (!quiz) return notFound();

    return (
        <Box px={8} py={6}>
            <Link href="/quiz">Назад</Link>
            <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="bg">
                <Container
                    maxW="md"
                    bg='subtleBg'
                    py={6}
                    px={6}
                    borderRadius="xl"
                    boxShadow="lg"
                >
                    <Heading as="h1" size="xl" mb={6} noOfLines={1} color="primary">
                        {quiz.title}
                    </Heading>
                    <QuizForm quiz={quiz}/>
                </Container>
            </Box>
        </Box>
    )
}
