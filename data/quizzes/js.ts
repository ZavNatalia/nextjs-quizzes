export const quiz = {
    slug: 'js',
    title: 'JavaScript',
    levels: {
        junior: [
            {
                name: 'q1',
                question: "Что выведет `[] + {} == '[object Object]'`?",
                options: [
                    { label: 'undefined', value: 'undefined' },
                    { label: 'true', value: 'true' },
                    { label: 'TypeError', value: 'typeerror' },
                    { label: 'false', value: 'false' },
                ],
                correctAnswer: 'true',
            },
            {
                name: 'q2',
                question: 'Что произойдёт при сравнении `NaN === NaN`?',
                options: [
                    { label: 'true', value: 'true' },
                    { label: 'false', value: 'false' },
                    { label: 'undefined', value: 'undefined' },
                    { label: 'null', value: 'null' },
                ],
                correctAnswer: 'false',
            },
            {
                name: 'q3',
                question: 'Чем отличается `let` от `var`?',
                options: [
                    { label: 'var — имеет функциональную область видимости', value: 'scope' },
                    { label: 'let — глобальная переменная', value: 'global' },
                    { label: 'var — создаёт замыкание', value: 'closure' },
                    { label: 'let — не может быть переопределён', value: 'override' },
                ],
                correctAnswer: 'scope',
            },
            {
                name: 'q4',
                question: 'Как работает оператор `?.`?',
                options: [
                    { label: 'Удаляет свойство', value: 'delete' },
                    { label: 'Аналог try/catch', value: 'trycatch' },
                    { label: 'Безопасный доступ к вложенным свойствам', value: 'safe' },
                    { label: 'Только для объектов', value: 'objects' },
                ],
                correctAnswer: 'safe',
            },
            {
                name: 'q5',
                question: 'Что делает `Object.freeze()`?',
                options: [
                    { label: 'Запрещает изменение объекта', value: 'freeze' },
                    { label: 'Удаляет свойства', value: 'delete' },
                    { label: 'Добавляет методы', value: 'add' },
                    { label: 'Создаёт копию', value: 'clone' },
                ],
                correctAnswer: 'freeze',
            },
        ],
        middle: [
            {
                name: 'q1',
                question: 'Что делает метод `bind` у функции?',
                options: [
                    { label: 'Навсегда привязывает `this`', value: 'bind' },
                    { label: 'Создает замыкание', value: 'closure' },
                    { label: 'Вызывает функцию немедленно', value: 'call' },
                    { label: 'Изменяет прототип', value: 'proto' },
                ],
                correctAnswer: 'bind',
            },
            {
                name: 'q2',
                question: 'Что произойдет при использовании `Object.create(null)`?',
                options: [
                    { label: 'Создается пустой объект с `__proto__`', value: 'default' },
                    { label: 'Создается массив', value: 'array' },
                    { label: 'Выбросится ошибка', value: 'error' },
                    { label: 'Создается объект без прототипа', value: 'no_proto' },
                ],
                correctAnswer: 'no_proto',
            },
            {
                name: 'q3',
                question: 'В чём основное отличие между операторами `==` и `===` в JavaScript?',
                options: [
                    { label: '`===` проверяет значение и тип без преобразования', value: 'strict' },
                    { label: '`==` выполняет строгое сравнение', value: 'strict2' },
                    { label: '`===` преобразует типы перед сравнением', value: 'coerce' },
                    { label: '`==` используется только с числами', value: 'numbersOnly' },
                ],
                correctAnswer: 'strict',
            },
            {
                name: 'q4',
                question: 'Что произойдет при `typeof Symbol()`?',
                options: [
                    { label: '`symbol`', value: 'symbol' },
                    { label: '`object`', value: 'object' },
                    { label: '`function`', value: 'function' },
                    { label: '`string`', value: 'string' },
                ],
                correctAnswer: 'symbol',
            },
            {
                name: 'q5',
                question: 'Какой метод массива не мутирует оригинальный массив?',
                options: [
                    { label: 'reverse', value: 'reverse' },
                    { label: 'filter', value: 'filter' },
                    { label: 'push', value: 'push' },
                    { label: 'splice', value: 'splice' },
                ],
                correctAnswer: 'filter',
            },
        ],
        senior: [
            {
                name: 'q1',
                question: 'Что делает оператор `void` в JavaScript?',
                options: [
                    { label: 'Проверяет тип', value: 'check' },
                    { label: 'Возвращает undefined', value: 'undefined' },
                    { label: 'Создает область видимости', value: 'scope' },
                    { label: 'Удаляет переменную', value: 'delete' },
                ],
                correctAnswer: 'undefined',
            },
            {
                name: 'q2',
                question: 'Как работает event loop?',
                options: [
                    { label: 'Обрабатывает setInterval синхронно', value: 'interval' },
                    { label: 'Сначала микротаски, потом макротаски', value: 'micro_macro' },
                    { label: 'Запускает синхронный код первым', value: 'sync_first' },
                    { label: 'Обрабатывает события последовательно', value: 'queue' },
                ],
                correctAnswer: 'micro_macro',
            },
            {
                name: 'q3',
                question: 'Какой результат `Object.is(NaN, NaN)`?',
                options: [
                    { label: 'true', value: 'true' },
                    { label: 'TypeError', value: 'typeerror' },
                    { label: 'undefined', value: 'undefined' },
                    { label: 'false', value: 'false' },
                ],
                correctAnswer: 'true',
            },
            {
                name: 'q4',
                question: 'Что произойдет при `Promise.resolve(10).then(() => { throw 42 })`?',
                options: [
                    { label: 'Промис выполнится', value: 'done' },
                    { label: 'Результат 42', value: '42' },
                    { label: 'Будет undefined', value: 'undef' },
                    { label: 'Ошибка 42', value: 'error' },
                ],
                correctAnswer: 'error',
            },
            {
                name: 'q5',
                question: 'Как работает `new Proxy()`?',
                options: [
                    { label: 'Позволяет перехватывать операции с объектом', value: 'trap' },
                    { label: 'Удаляет методы', value: 'remove' },
                    { label: 'Шифрует объект', value: 'encrypt' },
                    { label: 'Создает глубокую копию', value: 'clone' },
                ],
                correctAnswer: 'trap',
            },
        ],
    },
};
