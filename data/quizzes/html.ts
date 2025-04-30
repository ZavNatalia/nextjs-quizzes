export const quiz = {
    slug: 'html',
    title: 'HTML',
    questions: [
        {
            name: 'q1',
            question: 'Какой тег определяет семантически основное содержимое документа?',
            options: [
                { label: '<section>', value: 'section' },
                { label: '<main>', value: 'main' },
                { label: '<div>', value: 'div' },
                { label: '<body>', value: 'body' }
            ],
            correctAnswer: 'main'
        },
        {
            name: 'q2',
            question: 'Какой атрибут используется для обеспечения доступности (a11y)?',
            options: [
                { label: 'title', value: 'title' },
                { label: 'alt', value: 'alt' },
                { label: 'tooltip', value: 'tooltip' },
                { label: 'aria-label', value: 'aria-label' }
            ],
            correctAnswer: 'aria-label'
        },
        {
            name: 'q3',
            question: 'Что делает атрибут `autocomplete` в <form>?',
            options: [
                { label: 'Добавляет подсказки', value: 'hint' },
                { label: 'Включает автозаполнение полей', value: 'on' },
                { label: 'Проверяет email', value: 'validate' },
                { label: 'Очищает форму', value: 'reset' }
            ],
            correctAnswer: 'on'
        },
        {
            name: 'q4',
            question: 'Можно ли вложить <section> внутрь <article>?',
            options: [
                { label: 'Нет', value: 'no' },
                { label: 'Только в HTML5.2', value: 'html52' },
                { label: 'Да', value: 'yes' },
                { label: 'Зависит от браузера', value: 'browser' }
            ],
            correctAnswer: 'yes'
        },
        {
            name: 'q5',
            question: 'Какой тег используется для вставки SVG?',
            options: [
                { label: '<image>', value: 'image' },
                { label: '<svg>', value: 'svg' },
                { label: '<vector>', value: 'vector' },
                { label: '<canvas>', value: 'canvas' }
            ],
            correctAnswer: 'svg'
        }
    ]
}
