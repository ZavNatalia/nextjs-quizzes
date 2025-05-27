export const quiz = {
    slug: 'css',
    title: 'CSS',
    levels: {
        junior: [
            {
                name: 'q1',
                question: 'Что делает свойство `will-change`?',
                options: [
                    { label: 'Изменяет цвет', value: 'color' },
                    { label: 'Предсказывает hover', value: 'hover' },
                    { label: 'Скрывает элемент', value: 'hide' },
                    { label: 'Оптимизирует будущие изменения', value: 'optimize' },
                ],
                correctAnswer: 'optimize',
            },
            {
                name: 'q2',
                question: 'Какой селектор выберет только первый дочерний элемент?',
                options: [
                    { label: ':nth-child(1)', value: 'nth' },
                    { label: '::before', value: 'before' },
                    { label: '::first-line', value: 'first-line' },
                    { label: ':first-child', value: 'first-child' },
                ],
                correctAnswer: 'first-child',
            },
            {
                name: 'q3',
                question: 'Как работает `position: sticky`?',
                options: [
                    { label: 'Зависит от контекста', value: 'context' },
                    { label: 'Залипает при скролле', value: 'sticky' },
                    { label: 'Фиксируется внизу', value: 'bottom' },
                    { label: 'Остается на месте', value: 'fixed' },
                ],
                correctAnswer: 'sticky',
            },
            {
                name: 'q4',
                question: 'Что делает `backdrop-filter`?',
                options: [
                    { label: 'Размазывает весь экран', value: 'screen' },
                    { label: 'Затемняет фон', value: 'dark' },
                    { label: 'Скрывает фон', value: 'hide' },
                    { label: 'Применяет эффекты к фону под элементом', value: 'blur' },
                ],
                correctAnswer: 'blur',
            },
            {
                name: 'q5',
                question: 'Как задать переменную в CSS?',
                options: [
                    { label: 'color: --red;', value: 'wrong1' },
                    { label: '--color: red;', value: 'var' },
                    { label: '@color: red;', value: 'wrong2' },
                    { label: '$color: red;', value: 'sass' },
                ],
                correctAnswer: 'var',
            },
        ],
        middle: [
            {
                name: 'q1',
                question: 'Что делает свойство `contain: layout style;` в CSS?',
                options: [
                    { label: 'Ничего не делает', value: 'none' },
                    { label: 'Изолирует layout и стили', value: 'both' },
                    { label: 'Изолирует только layout', value: 'layout' },
                    { label: 'Изолирует только стили', value: 'style' },
                ],
                correctAnswer: 'both',
            },
            {
                name: 'q2',
                question: 'Как работает `@supports`?',
                options: [
                    { label: 'Применяет CSS на сервере', value: 'server' },
                    { label: 'Определяет поддержку свойства браузером', value: 'true' },
                    { label: 'Определяет медиа-запросы', value: 'media' },
                    { label: 'Отключает стили', value: 'off' },
                ],
                correctAnswer: 'true',
            },
            {
                name: 'q3',
                question:
                    'Какой способ центрирования элемента по горизонтали и вертикали с помощью Flexbox?',
                options: [
                    {
                        label: 'display: flex; justify-content: center; align-items: center;',
                        value: 'both',
                    },
                    { label: 'justify-content: center;', value: 'justify' },
                    { label: 'align-items: center;', value: 'align' },
                    { label: 'text-align: center;', value: 'text' },
                ],
                correctAnswer: 'both',
            },
            {
                name: 'q4',
                question: 'Как задать aspect-ratio 16:9 в CSS?',
                options: [
                    { label: 'height: auto;', value: 'auto' },
                    { label: 'width: 100%;', value: 'width' },
                    { label: 'aspect-ratio: 16 / 9;', value: 'ratio' },
                    { label: 'padding: 56.25%;', value: 'padding' },
                ],
                correctAnswer: 'ratio',
            },
            {
                name: 'q5',
                question: 'Что такое custom media queries в CSS?',
                options: [
                    { label: 'Медиа-запросы, определяемые с помощью переменных', value: 'var' },
                    { label: 'Специальный CSS фреймворк', value: 'fw' },
                    { label: 'Препроцессорные команды', value: 'pre' },
                    { label: 'Стили внутри @keyframes', value: 'key' },
                ],
                correctAnswer: 'var',
            },
        ],
        senior: [
            {
                name: 'q1',
                question: 'Как работает `subgrid` в CSS Grid?',
                options: [
                    { label: 'Упрощает flex-поведение', value: 'flex' },
                    { label: 'Позволяет наследовать сетку родителя', value: 'inherit' },
                    { label: 'Создаёт новую сетку', value: 'new' },
                    { label: 'Отключает вложенные сетки', value: 'off' },
                ],
                correctAnswer: 'inherit',
            },
            {
                name: 'q2',
                question: 'Что делает `:has()` в CSS?',
                options: [
                    { label: 'Фильтрует медиа-запросы', value: 'media' },
                    { label: 'Выбирает родителя по наличию потомка', value: 'has' },
                    { label: 'Сравнивает значения', value: 'compare' },
                    { label: 'Вызывает JavaScript', value: 'js' },
                ],
                correctAnswer: 'has',
            },
            {
                name: 'q3',
                question:
                    'Какой из способов отрисовки — наиболее производительный для сложной анимации?',
                options: [
                    { label: 'Top + left', value: 'tl' },
                    { label: 'Margin + padding', value: 'mp' },
                    { label: 'Transform + will-change', value: 'transform' },
                    { label: 'Display: none + block', value: 'display' },
                ],
                correctAnswer: 'transform',
            },
            {
                name: 'q4',
                question: 'Что произойдёт при отрицательном z-index без позиции?',
                options: [
                    { label: 'Будет скрыт полностью', value: 'hide' },
                    { label: 'Будет поверх других', value: 'top' },
                    { label: 'z-index не будет работать', value: 'none' },
                    { label: 'Элемент будет проигнорирован', value: 'ignore' },
                ],
                correctAnswer: 'none',
            },
            {
                name: 'q5',
                question: 'Какой параметр в `@layer` задаёт порядок?',
                options: [
                    { label: 'Только в SCSS', value: 'scss' },
                    { label: 'Порядок подключения слоёв', value: 'order' },
                    { label: 'Сначала применяется base', value: 'base' },
                    { label: 'Невозможно задать порядок', value: 'no' },
                ],
                correctAnswer: 'order',
            },
        ],
    },
};
