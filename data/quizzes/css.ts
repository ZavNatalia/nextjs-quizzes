export const quiz = {
    slug: 'css',
    title: 'CSS',
    questions: [
        {
            name: 'q1',
            question: 'Что делает свойство `will-change`?',
            options: [
                { label: 'Предсказывает hover', value: 'hover' },
                { label: 'Оптимизирует будущие изменения', value: 'optimize' },
                { label: 'Скрывает элемент', value: 'hide' },
                { label: 'Изменяет цвет', value: 'color' }
            ],
            correctAnswer: 'optimize'
        },
        {
            name: 'q2',
            question: 'Какой селектор выберет только первый дочерний элемент?',
            options: [
                { label: ':first-child', value: 'first-child' },
                { label: '::before', value: 'before' },
                { label: '::first-line', value: 'first-line' },
                { label: ':nth-child(1)', value: 'nth' }
            ],
            correctAnswer: 'first-child'
        },
        {
            name: 'q3',
            question: 'Как работает `position: sticky`?',
            options: [
                { label: 'Фиксируется внизу', value: 'bottom' },
                { label: 'Остается на месте', value: 'fixed' },
                { label: 'Зависит от контекста', value: 'context' },
                { label: 'Залипает при скролле', value: 'sticky' }
            ],
            correctAnswer: 'sticky'
        },
        {
            name: 'q4',
            question: 'Что делает `backdrop-filter`?',
            options: [
                { label: 'Затемняет фон', value: 'dark' },
                { label: 'Применяет эффекты к фону под элементом', value: 'blur' },
                { label: 'Размазывает весь экран', value: 'screen' },
                { label: 'Скрывает фон', value: 'hide' }
            ],
            correctAnswer: 'blur'
        },
        {
            name: 'q5',
            question: 'Как задать переменную в CSS?',
            options: [
                { label: 'color: --red;', value: 'wrong1' },
                { label: '--color: red;', value: 'var' },
                { label: '$color: red;', value: 'sass' },
                { label: '@color: red;', value: 'wrong2' }
            ],
            correctAnswer: 'var'
        }
    ]
}
