export const quiz = {
    slug: 'nextjs',
    title: 'Next.js',
    questions: [
        {
            name: 'q1',
            question: 'Какой каталог используется в Next.js 13+ для маршрутов и серверных компонентов?',
            options: [
                { label: '/pages', value: 'pages' },
                { label: '/routes', value: 'routes' },
                { label: '/src', value: 'src' },
                { label: '/app', value: 'app' }
            ],
            correctAnswer: 'app'
        },
        {
            name: 'q2',
            question: 'Что такое `getServerSideProps`?',
            options: [
                { label: 'Функция для SSG', value: 'ssg' },
                { label: 'Функция для SSR', value: 'ssr' },
                { label: 'Функция маршрутизации', value: 'router' },
                { label: 'Метод API', value: 'api' }
            ],
            correctAnswer: 'ssr'
        },
        {
            name: 'q3',
            question: 'Что делает `dynamic()` в Next.js?',
            options: [
                { label: 'Создаёт API маршрут', value: 'api' },
                { label: 'Используется для SSR', value: 'ssr' },
                { label: 'Создаёт layout', value: 'layout' },
                { label: 'Позволяет лениво загружать компоненты', value: 'lazy' }
            ],
            correctAnswer: 'lazy'
        },
        {
            name: 'q4',
            question: 'Где выполняется код в `layout.tsx`?',
            options: [
                { label: 'На клиенте', value: 'client' },
                { label: 'На сервере', value: 'server' },
                { label: 'Только при билде', value: 'build' },
                { label: 'На CDN', value: 'cdn' }
            ],
            correctAnswer: 'server'
        },
        {
            name: 'q5',
            question: 'Какой хук используется для получения текущего маршрута в `app/`?',
            options: [
                { label: 'useRouter', value: 'useRouter' },
                { label: 'useRoute', value: 'useRoute' },
                { label: 'usePathname', value: 'usePathname' },
                { label: 'useLocation', value: 'useLocation' }
            ],
            correctAnswer: 'usePathname'
        }
    ]
}
