export const quiz = {
    slug: 'js',
    title: 'JavaScript',
    questions: [
        {
            name: 'q1',
            question: "Что выведет `[] + {} == '[object Object]'`?",
            options: [
                { label: 'true', value: 'true' },
                { label: 'false', value: 'false' },
                { label: 'TypeError', value: 'typeerror' },
                { label: 'undefined', value: 'undefined' }
            ],
            correctAnswer: 'true'
        },
        {
            name: 'q2',
            question: 'Что произойдёт при сравнении `NaN === NaN`?',
            options: [
                { label: 'false', value: 'false' },
                { label: 'true', value: 'true' },
                { label: 'undefined', value: 'undefined' },
                { label: 'null', value: 'null' }
            ],
            correctAnswer: 'false'
        },
        {
            name: 'q3',
            question: 'Чем отличается `let` от `var`?',
            options: [
                { label: 'let — глобальная переменная', value: 'global' },
                { label: 'var — создаёт замыкание', value: 'closure' },
                { label: 'let — не может быть переопределён', value: 'override' },
                { label: 'var — имеет функциональную область видимости', value: 'scope' }
            ],
            correctAnswer: 'scope'
        },
        {
            name: 'q4',
            question: 'Как работает оператор `?.`?',
            options: [
                { label: 'Только для объектов', value: 'objects' },
                { label: 'Безопасный доступ к вложенным свойствам', value: 'safe' },
                { label: 'Аналог try/catch', value: 'trycatch' },
                { label: 'Удаляет свойство', value: 'delete' }
            ],
            correctAnswer: 'safe'
        },
        {
            name: 'q5',
            question: 'Что делает `Object.freeze()`?',
            options: [
                { label: 'Удаляет свойства', value: 'delete' },
                { label: 'Создаёт копию', value: 'clone' },
                { label: 'Запрещает изменение объекта', value: 'freeze' },
                { label: 'Добавляет методы', value: 'add' }
            ],
            correctAnswer: 'freeze'
        }
    ]
}
