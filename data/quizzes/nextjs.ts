export const quiz = {
    slug: 'nextjs',
    title: 'Next.js',
    levels: {
        junior: [
            {
                name: 'q1',
                question:
                    'Какой каталог используется в Next.js 14 для маршрутов и серверных компонентов?',
                options: [
                    { label: '/pages', value: 'pages' },
                    { label: '/routes', value: 'routes' },
                    { label: '/src', value: 'src' },
                    { label: '/app', value: 'app' },
                ],
                correctAnswer: 'app',
                explanation: 'В Next.js 13+ используется папка `/app` вместо `/pages` для маршрутов и компонентов. Она поддерживает Server Components, layouts, loading/error файлы и другие возможности нового маршрутизатора.',
            },
            {
                name: 'q2',
                question:
                    'Что необходимо добавить в начало файла, чтобы компонент стал клиентским?',
                options: [
                    { label: "'use client'", value: 'use-client' },
                    { label: "'client-only'", value: 'client-only' },
                    { label: "export const dynamic = 'force-dynamic'", value: 'dynamic' },
                    { label: "import React from 'react'", value: 'import-react' },
                ],
                correctAnswer: 'use-client',
                explanation: "В Server Components по умолчанию код исполняется на сервере. Чтобы компонент рендерился на клиенте, нужно явно указать директиву `'use client'` в начале файла.",
            },
            {
                name: 'q3',
                question: 'Какой компонент из Next.js используется для навигации?',
                options: [
                    { label: '<a>', value: 'a' },
                    { label: 'useRouter', value: 'useRouter' },
                    { label: "Link из 'next/link'", value: 'link' },
                    { label: 'RouterLink', value: 'routerlink' },
                ],
                correctAnswer: 'link',
                explanation: "`Link` из `next/link` — специальный компонент, оборачивающий `<a>`, который обеспечивает client-side переходы и префетчинг страниц.",
            },
            {
                name: 'q4',
                question: 'Какой хук возвращает текущий путь в `app/`?',
                options: [
                    { label: 'useLocation', value: 'useLocation' },
                    { label: 'usePathname', value: 'usePathname' },
                    { label: 'useRoute', value: 'useRoute' },
                    { label: 'useHref', value: 'useHref' },
                ],
                correctAnswer: 'usePathname',
                explanation: "`usePathname()` — хук из `next/navigation`, который возвращает текущий путь (pathname) в приложениях, использующих `/app` маршрутизацию.",
            },
            {
                name: 'q5',
                question: 'Какой файл используется для обработки ошибок на уровне маршрута?',
                options: [
                    { label: 'error.tsx', value: 'error' },
                    { label: 'not-found.tsx', value: 'not-found' },
                    { label: 'layout.tsx', value: 'layout' },
                    { label: 'middleware.ts', value: 'middleware' },
                ],
                correctAnswer: 'error',
                explanation: "`error.tsx` в `app/` папке обрабатывает ошибки, происходящие при загрузке маршрута или рендеринге компонента. Это аналог boundary-ошибок.",
            },
        ],
        middle: [
            {
                name: 'q6',
                question: 'Какой способ используется для статической генерации путей в `app/`?',
                options: [
                    { label: 'generateStaticParams', value: 'generateStaticParams' },
                    { label: 'getStaticPaths', value: 'getStaticPaths' },
                    { label: 'useEffect', value: 'useEffect' },
                    { label: 'getPaths', value: 'getPaths' },
                ],
                correctAnswer: 'generateStaticParams',
                explanation: "`generateStaticParams()` используется в `app/`, чтобы указать все возможные параметры маршрута для предварительной генерации страниц на этапе билда.",
            },
            {
                name: 'q7',
                question: 'Какой способ задаёт интервал пересоздания страницы при ISR?',
                options: [
                    { label: 'export const revalidate = 60', value: 'revalidate' },
                    { label: 'useRevalidate()', value: 'hook' },
                    { label: "export const dynamic = 'auto'", value: 'dynamic' },
                    { label: 'getServerSideProps', value: 'gssp' },
                ],
                correctAnswer: 'revalidate',
                explanation: "`export const revalidate = 60` означает, что страница будет пересоздаваться не чаще одного раза в 60 секунд. Это способ настройки ISR (Incremental Static Regeneration).",
            },
            {
                name: 'q8',
                question: 'Как загрузить данные на сервере в компоненте?',
                options: [
                    { label: "fetch() в компоненте без 'use client'", value: 'fetch' },
                    { label: 'useEffect', value: 'useEffect' },
                    { label: 'getInitialProps', value: 'gip' },
                    { label: 'next-data-loader', value: 'loader' },
                ],
                correctAnswer: 'fetch',
                explanation: "Компоненты без `'use client'` исполняются на сервере. Можно использовать `fetch()` прямо внутри них, и Next.js автоматически оптимизирует такие вызовы.",
            },
            {
                name: 'q9',
                question: 'Какой модификатор dynamic route позволяет сделать сегмент необязательным?',
                options: [
                    { label: '[[slug]]', value: 'optional' },
                    { label: '[slug?]', value: 'ts-optional' },
                    { label: '(slug)', value: 'group' },
                    { label: '[...slug]', value: 'rest' },
                ],
                correctAnswer: 'optional',
                explanation: "В Next.js `[[slug]]` — это синтаксис для необязательного сегмента маршрута. Если параметр отсутствует, используется дефолтная версия страницы.",
            },
            {
                name: 'q10',
                question: "Что делает `export const dynamic = 'force-dynamic'`?",
                options: [
                    { label: 'Отключает кеш и включает SSR', value: 'force' },
                    { label: 'Включает ISR', value: 'isr' },
                    { label: 'Включает SWR', value: 'swr' },
                    { label: 'Рендерит страницу при билде', value: 'ssg' },
                ],
                correctAnswer: 'force',
                explanation: "Флаг `'force-dynamic'` говорит Next.js всегда рендерить страницу на сервере (SSR), игнорируя кеш и статическую генерацию.",
            },
        ],
        senior: [
            {
                name: 'q11',
                question: 'Какой метод позволяет вручную сбросить кеш страницы?',
                options: [
                    { label: 'revalidateTag()', value: 'tag' },
                    { label: 'clearCache()', value: 'clear' },
                    { label: 'refreshISR()', value: 'refresh' },
                    { label: "fetch(..., { cache: 'no-store' })", value: 'no-store' },
                ],
                correctAnswer: 'tag',
                explanation: "`revalidateTag()` используется для ручного сброса кеша по тегу, который можно привязывать к страницам или запросам. Полезно при динамическом контенте.",
            },
            {
                name: 'q12',
                question: 'Как отрендерить layout один раз для всех вложенных маршрутов?',
                options: [
                    { label: 'Использовать shared layout в app/', value: 'shared' },
                    { label: 'Создать middleware', value: 'middleware' },
                    { label: 'Регистрировать через router.ts', value: 'router' },
                    { label: 'Оборачивать в _app.tsx', value: '_app' },
                ],
                correctAnswer: 'shared',
                explanation: "В `app/` можно создать `layout.tsx` в корне маршрута, и он будет использоваться всеми вложенными маршрутами — это поведение по умолчанию.",
            },
            {
                name: 'q13',
                question: 'Какой способ использовать для условной маршрутизации на уровне сегментов?',
                options: [
                    { label: 'Middleware', value: 'middleware' },
                    { label: 'Catch-all маршруты', value: 'catch' },
                    { label: 'Route groups', value: 'group' },
                    { label: 'Segment config', value: 'segment' },
                ],
                correctAnswer: 'middleware',
                explanation: "Middleware позволяет обрабатывать запросы до рендера страницы, включая условную маршрутизацию, редиректы, защиту маршрутов и т.д.",
            },
            {
                name: 'q14',
                question: "Что делает `export const fetchCache = 'force-no-store'`?",
                options: [
                    { label: 'Отключает кеширование fetch', value: 'no-store' },
                    { label: 'Кеширует ответ навсегда', value: 'forever' },
                    { label: 'Включает клиентский fetch', value: 'client' },
                    { label: 'Ререндерит компонент', value: 'rerender' },
                ],
                correctAnswer: 'no-store',
                explanation: "`fetchCache = 'force-no-store'` отключает кеширование всех fetch-запросов на этой странице. Используется для динамического контента.",
            },
            {
                name: 'q15',
                question: 'Как правильно оформить error boundary в маршруте?',
                options: [
                    { label: 'Создать файл error.tsx', value: 'error' },
                    { label: 'Обернуть в try/catch', value: 'try' },
                    { label: 'Добавить fallback в layout', value: 'fallback' },
                    { label: 'Создать файл error-boundary.ts', value: 'boundary' },
                ],
                correctAnswer: 'error',
                explanation: "`error.tsx` в Next.js — это error boundary для маршрута. Он ловит ошибки рендера или загрузки и отображает fallback интерфейс.",
            },
        ],
    },
}
