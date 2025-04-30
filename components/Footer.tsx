import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <Box as="footer" bg="subtleBg" w="full" py={3} textAlign="center">
            <Text fontSize="sm" color="gray.500">
                © {year} QuizApp. Все права защищены.
            </Text>
        </Box>
    )
}
