export const quiz = {
    slug: 'html',
    title: 'HTML',
    levels: {
        junior: [
            {
                name: 'q1',
                question: 'Какой тег определяет семантически основное содержимое документа?',
                options: [
                    { label: '<div>', value: 'div' },
                    { label: '<main>', value: 'main' },
                    { label: '<body>', value: 'body' },
                    { label: '<section>', value: 'section' }
                ],
                correctAnswer: 'main'
            },
            {
                name: 'q2',
                question: 'Какой атрибут используется для доступности (a11y), чтобы описать элемент?',
                options: [
                    { label: 'title', value: 'title' },
                    { label: 'aria-label', value: 'aria-label' },
                    { label: 'tooltip', value: 'tooltip' },
                    { label: 'alt', value: 'alt' }
                ],
                correctAnswer: 'aria-label'
            },
            {
                name: 'q3',
                question: 'Что делает атрибут `autocomplete` в <form>?',
                options: [
                    { label: 'Проверяет email', value: 'validate' },
                    { label: 'Включает автозаполнение полей', value: 'on' },
                    { label: 'Очищает форму', value: 'reset' },
                    { label: 'Добавляет подсказки', value: 'hint' }
                ],
                correctAnswer: 'on'
            },
            {
                name: 'q4',
                question: 'Можно ли вложить <section> внутрь <article>?',
                options: [
                    { label: 'Только в HTML5.2', value: 'html52' },
                    { label: 'Да', value: 'yes' },
                    { label: 'Нет', value: 'no' },
                    { label: 'Зависит от браузера', value: 'browser' }
                ],
                correctAnswer: 'yes'
            },
            {
                name: 'q5',
                question: 'Какой тег используется для вставки встраиваемой векторной графики?',
                options: [
                    { label: '<canvas>', value: 'canvas' },
                    { label: '<vector>', value: 'vector' },
                    { label: '<svg>', value: 'svg' },
                    { label: '<image>', value: 'image' }
                ],
                correctAnswer: 'svg'
            }
        ],
        middle: [
            {
                name: 'q6',
                question: 'Какой атрибут тега <form> указывает путь для отправки данных?',
                options: [
                    { label: 'target', value: 'target' },
                    { label: 'enctype', value: 'enctype' },
                    { label: 'action', value: 'action' },
                    { label: 'method', value: 'method' }
                ],
                correctAnswer: 'action'
            },
            {
                name: 'q7',
                question: 'Какой тег используется для группировки логически связанных элементов формы?',
                options: [
                    { label: '<formgroup>', value: 'formgroup' },
                    { label: '<labelset>', value: 'labelset' },
                    { label: '<section>', value: 'section' },
                    { label: '<fieldset>', value: 'fieldset' }
                ],
                correctAnswer: 'fieldset'
            },
            {
                name: 'q8',
                question: 'Какой элемент помогает браузеру адаптировать страницу под размер экрана?',
                options: [
                    { label: '<meta name="viewport">', value: 'viewport' },
                    { label: '<meta charset="utf-8">', value: 'charset' },
                    { label: '<responsive>', value: 'responsive' },
                    { label: '<device>', value: 'device' }
                ],
                correctAnswer: 'viewport'
            },
            {
                name: 'q9',
                question: 'Какой атрибут input запрещает отправку формы, если поле не заполнено?',
                options: [
                    { label: 'required', value: 'required' },
                    { label: 'validate', value: 'validate' },
                    { label: 'check', value: 'check' },
                    { label: 'empty', value: 'empty' }
                ],
                correctAnswer: 'required'
            },
            {
                name: 'q10',
                question: 'Что делает тег <template> в HTML?',
                options: [
                    { label: 'Добавляет форму', value: 'form' },
                    { label: 'Показывает модалку', value: 'modal' },
                    { label: 'Хранит скрытую разметку, не отображаемую сразу', value: 'hidden' },
                    { label: 'Определяет внешний шаблон', value: 'external' }
                ],
                correctAnswer: 'hidden'
            }
        ],
        senior: [
            {
                name: 'q11',
                question: 'Что произойдёт, если в <button> не указать атрибут type?',
                options: [
                    { label: 'Будет ошибка', value: 'error' },
                    { label: 'Он будет отправлять форму', value: 'submit' },
                    { label: 'Ничего', value: 'nothing' },
                    { label: 'Он будет сбрасывать форму', value: 'reset' }
                ],
                correctAnswer: 'submit'
            },
            {
                name: 'q12',
                question: 'Какой атрибут улучшает навигацию по клавиатуре в сложных интерфейсах?',
                options: [
                    { label: 'aria-label', value: 'aria' },
                    { label: 'accesskey', value: 'accesskey' },
                    { label: 'tabindex', value: 'tabindex' },
                    { label: 'shortcut', value: 'shortcut' }
                ],
                correctAnswer: 'tabindex'
            },
            {
                name: 'q13',
                question: 'Какой тег сам по себе не влияет напрямую на SEO?',
                options: [
                    { label: '<meta name="description">', value: 'meta' },
                    { label: '<title>', value: 'title' },
                    { label: '<h1>', value: 'h1' },
                    { label: '<link rel="stylesheet">', value: 'link' }
                ],
                correctAnswer: 'link'
            },
            {
                name: 'q14',
                question: 'Какая ошибка в HTML ухудшает доступность для пользователей с нарушениями зрения?',
                options: [
                    { label: 'Отсутствие class', value: 'class' },
                    { label: 'Добавление tabindex всем элементам', value: 'tabindex' },
                    { label: 'Отсутствие alt у изображений', value: 'alt' },
                    { label: 'Использование <main> вместо <div>', value: 'main' }
                ],
                correctAnswer: 'alt'
            },
            {
                name: 'q15',
                question: 'Можно ли использовать несколько <main> на одной HTML-странице?',
                options: [
                    { label: 'Да, но не рекомендуется', value: 'yes' },
                    { label: 'Да, по стандарту', value: 'ok' },
                    { label: 'Нет', value: 'no' },
                    { label: 'Только внутри iframe', value: 'iframe' }
                ],
                correctAnswer: 'yes'
            }
        ]
    }
}
