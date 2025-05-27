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
            },
        ],
    },
};
