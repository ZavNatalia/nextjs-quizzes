export const quiz = {
    slug: 'react',
    title: 'React',
    levels: {
        junior: [
            {
                name: 'q1',
                question: 'Можно ли вызывать хук внутри условия?',
                options: [
                    { label: 'Только useEffect', value: 'onlyEffect' },
                    { label: 'Да', value: 'yes' },
                    { label: 'Только в классовом компоненте', value: 'classOnly' },
                    { label: 'Нет', value: 'no' },
                ],
                correctAnswer: 'no',
                explanation:
                    'Хуки React (например, useState, useEffect) нужно вызывать на верхнем уровне компонента, а не внутри условий или циклов, чтобы React корректно отслеживал порядок вызова хуков.',
            },
            {
                name: 'q2',
                question: 'Что делает `useMemo`?',
                options: [
                    { label: 'Кеширует вычисления', value: 'memo' },
                    { label: 'Создает состояние', value: 'state' },
                    { label: 'Рендерит DOM', value: 'render' },
                    { label: 'Обрабатывает события', value: 'event' },
                ],
                correctAnswer: 'memo',
                explanation:
                    '`useMemo` позволяет запоминать результат функции между рендерами, если зависимости не изменились. Это полезно для оптимизации производительности при дорогих вычислениях.',
            },
            {
                name: 'q3',
                question: 'Что делает `React.StrictMode`?',
                options: [
                    { label: 'Проверяет потенциальные ошибки', value: 'strict' },
                    { label: 'Оптимизирует сборку', value: 'optimize' },
                    { label: 'Запускает сервер', value: 'server' },
                    { label: 'Включает строгую типизацию', value: 'types' },
                ],
                correctAnswer: 'strict',
                explanation:
                    '`React.StrictMode` помогает выявлять потенциальные проблемы, например, небезопасные жизненные циклы или неправильное использование хуков. Он не влияет на поведение в продакшене.',
            },
            {
                name: 'q4',
                question: 'Как передать компонент как пропс?',
                options: [
                    { label: '<Component>props</Component>', value: 'child' },
                    { label: '<Component />', value: 'element' },
                    { label: '{Component}', value: 'value' },
                    { label: '() => <Component />', value: 'fn' },
                ],
                correctAnswer: 'fn',
                explanation:
                    'Функция `() => <Component />` позволяет отложить создание компонента до момента использования и сохранить контроль над его рендером в родителе.',
            },
            {
                name: 'q5',
                question: 'Что произойдёт при обновлении `useState` с тем же значением?',
                options: [
                    { label: 'Сработает useEffect', value: 'effect' },
                    { label: 'Ререндер не произойдёт', value: 'noRender' },
                    { label: 'Компонент ререндерится', value: 'render' },
                    { label: 'Сбросится DOM', value: 'reset' },
                ],
                correctAnswer: 'noRender',
                explanation:
                    'React сравнивает предыдущее и новое значение состояния. Если они равны (по ссылке или значению), ререндер не происходит для оптимизации.',
            },
        ],
        middle: [
            {
                name: 'q1',
                question: 'Что произойдёт при передаче нового колбэка в useCallback без deps?',
                options: [
                    { label: 'Будет новая функция на каждый рендер', value: 'new' },
                    { label: 'Функция не будет вызвана', value: 'none' },
                    { label: 'useCallback не работает без deps', value: 'error' },
                    { label: 'Функция кешируется навсегда', value: 'cache' },
                ],
                correctAnswer: 'new',
                explanation:
                    'Без массива зависимостей useCallback будет возвращать новую функцию при каждом рендере. Чтобы функция мемоизировалась, нужен массив зависимостей.',
            },
            {
                name: 'q2',
                question: 'В каком хуке безопасно работать с DOM напрямую?',
                options: [
                    { label: 'useCallback', value: 'callback' },
                    { label: 'useMemo', value: 'memo' },
                    { label: 'useState', value: 'state' },
                    { label: 'useEffect', value: 'effect' },
                ],
                correctAnswer: 'effect',
                explanation:
                    'Хук useEffect вызывается после монтирования компонента, когда DOM уже доступен. Это безопасное место для прямой работы с DOM-элементами.',
            },
            {
                name: 'q3',
                question: 'Зачем нужен `key` в списках элементов?',
                options: [
                    { label: 'Для кэширования', value: 'cache' },
                    { label: 'Для оптимизации повторного рендера', value: 'opt' },
                    { label: 'Для идентификации компонентов', value: 'identify' },
                    { label: 'Для уникальности id', value: 'id' },
                ],
                correctAnswer: 'opt',
                explanation:
                    'Ключи позволяют React эффективно обновлять DOM, определяя, какие элементы изменились, добавились или удалились, минимизируя перерисовку.',
            },
            {
                name: 'q4',
                question: 'Как работает useRef?',
                options: [
                    { label: 'Хранит мутабельную ссылку между рендерами', value: 'ref' },
                    { label: 'Вызывает функцию при рендере', value: 'call' },
                    { label: 'Следит за состоянием', value: 'state' },
                    { label: 'Создает новый DOM-элемент', value: 'dom' },
                ],
                correctAnswer: 'ref',
                explanation:
                    '`useRef` используется для хранения мутабельных значений, которые сохраняются между рендерами и не вызывают повторный рендер при изменении.',
            },
            {
                name: 'q5',
                question: 'Что произойдёт, если в компоненте вызывать setState в render?',
                options: [
                    { label: 'Работает как useEffect', value: 'effect' },
                    { label: 'Ошибка: бесконечный цикл', value: 'loop' },
                    { label: 'Ничего', value: 'none' },
                    { label: 'Вызовется один раз', value: 'once' },
                ],
                correctAnswer: 'loop',
                explanation:
                    'Вызов setState внутри render вызовет новый рендер, что снова вызовет setState — это приведёт к бесконечному циклу и ошибке.',
            },
        ],
        senior: [
            {
                name: 'q1',
                question: 'Зачем использовать lazy + Suspense?',
                options: [
                    { label: 'Для SSR', value: 'ssr' },
                    { label: 'Для улучшения accessibility', value: 'a11y' },
                    { label: 'Для ленивой подгрузки компонентов', value: 'lazy' },
                    { label: 'Для SEO', value: 'seo' },
                ],
                correctAnswer: 'lazy',
                explanation:
                    '`React.lazy` позволяет загружать компоненты по требованию, а `Suspense` позволяет отобразить fallback пока компонент загружается — это улучшает производительность.',
            },
            {
                name: 'q2',
                question: 'Что делает forwardRef?',
                options: [
                    { label: 'Создает memoized ref', value: 'memo' },
                    { label: 'Управляет фокусом', value: 'focus' },
                    { label: 'Пробрасывает ref в дочерний компонент', value: 'pass' },
                    { label: 'Оборачивает хук', value: 'hook' },
                ],
                correctAnswer: 'pass',
                explanation:
                    '`forwardRef` позволяет передать `ref` от родителя к DOM-элементу внутри дочернего компонента. Это полезно для управления фокусом и доступом к DOM из родителя.',
            },
            {
                name: 'q3',
                question: 'Когда useLayoutEffect лучше useEffect?',
                options: [
                    { label: 'Для запросов к API', value: 'api' },
                    { label: 'Всегда быстрее', value: 'fast' },
                    { label: 'Для мутаций состояния', value: 'mutate' },
                    { label: 'Для синхронных изменений DOM перед отрисовкой', value: 'layout' },
                ],
                correctAnswer: 'layout',
                explanation:
                    '`useLayoutEffect` вызывается до отрисовки экрана и подходит для синхронных операций с DOM. Это полезно, когда важно избежать визуальных артефактов.',
            },
            {
                name: 'q4',
                question: 'Что возвращает useReducer?',
                options: [
                    { label: 'Массив из состояния и dispatch', value: 'tuple' },
                    { label: 'Только dispatch', value: 'dispatch' },
                    { label: 'Функцию рендера', value: 'render' },
                    { label: 'Компонент', value: 'component' },
                ],
                correctAnswer: 'tuple',
                explanation:
                    '`useReducer` возвращает массив из двух элементов: текущего состояния и функции `dispatch`, которая позволяет обновлять состояние с помощью reducer-функции.',
            },
            {
                name: 'q5',
                question: 'Как работает Context API?',
                options: [
                    { label: 'Заменяет useState', value: 'state' },
                    { label: 'Является middleware', value: 'middleware' },
                    {
                        label: 'Передает данные напрямую между любыми компонентами',
                        value: 'context',
                    },
                    { label: 'Обрабатывает события', value: 'event' },
                ],
                correctAnswer: 'context',
                explanation:
                    'Context API позволяет передавать данные (например, тему, язык) через дерево компонентов без необходимости пробрасывания пропсов на каждом уровне.',
            },
        ],
    },
};
