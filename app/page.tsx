'use client'
import React from 'react';
import { Box, Button, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { quizzes } from '@/data/quizzes'

export default function HomePage() {
    return (
        <Container maxW="4xl" py={10} flexGrow={1} px={8}>
            <VStack spacing={6} align="start">
                <Heading as="h1" size="2xl" color="primary">
                    Проверь свои знания по фронтенду
                </Heading>
                <Text fontSize="lg" color="text">
                    Интерактивные тесты по JavaScript, HTML, CSS, React, TypeScript и другим темам
                </Text>
                <Button
                    as={NextLink}
                    href="/quiz"
                    colorScheme="brand"
                    size="lg"
                >
                    Перейти к тестам
                </Button>

                <Heading as="h2" size="md" pt={10}>
                    Темы:
                </Heading>

                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} w="full">
                    {quizzes.map(({ slug, title }) => (
                        <Box
                            as={NextLink}
                            key={slug}
                            href={`/quiz/${slug}`}
                            bg="subtleBg"
                            p={5}
                            borderRadius="md"
                            boxShadow="sm"
                            transition='ease'
                            transitionDuration='0.3s'
                            _hover={{ boxShadow: 'md', bg: 'gray.200', _dark: { bg: 'gray.600' } }}
                        >
                            <Text fontWeight="semibold">{title}</Text>
                        </Box>
                    ))}
                </Grid>
            </VStack>
        </Container>
    )
}
