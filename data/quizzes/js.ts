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
                explanation:
                    '[] + {} приводит к сложению строки и объекта: [] преобразуется в пустую строку, {} — в "[object Object]". Получается строка "[object Object]", которая равна себе.',
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
                explanation:
                    'По спецификации `NaN` не равен ничему, даже самому себе. Поэтому `NaN === NaN` возвращает `false`.',
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
                explanation:
                    '`var` ограничен функцией, в которой объявлен, а `let` — блоком (например, if, for). Это позволяет избежать утечек переменных и конфликтов.',
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
                explanation:
                    'Оператор `?.` позволяет безопасно обращаться к вложенным свойствам объекта. Если любая часть цепочки `undefined` или `null`, возвращается `undefined`, не выбрасывая ошибки.',
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
                explanation:
                    '`Object.freeze()` делает объект неизменяемым: нельзя добавлять, удалять или изменять его свойства. Но вложенные объекты при этом не замораживаются.',
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
                explanation:
                    '`bind` возвращает новую функцию с привязанным значением `this`, не вызывая её немедленно. Полезно для передачи метода без потери контекста.',
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
                explanation:
                    'Такой объект не наследует от `Object.prototype`. Это удобно, когда не нужны лишние свойства (например, `toString`) — часто используется для мап.',
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
                explanation:
                    '`===` проверяет и тип, и значение, а `==` выполняет неявное преобразование типов (type coercion). Поэтому `===` предпочтительнее в большинстве случаев.',
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
                explanation:
                    '`Symbol()` возвращает уникальное значение специального типа — "symbol". Оно не сравнимо с другими символами и часто используется как ключ в объектах.',
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
                explanation:
                    '`filter` возвращает новый массив, не изменяя исходный. Остальные методы (`reverse`, `push`, `splice`) мутируют (изменяют) оригинальный массив.',
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
                explanation:
                    '`void` позволяет вычислить выражение и вернуть `undefined` вне зависимости от его результата. Часто используется для безопасного вызова функций в ссылках (`javascript:void(0)`).',
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
                explanation:
                    'Сначала выполняется весь синхронный код, затем микротаски (например, `.then` из промисов), и только потом макротаски (`setTimeout`, `setInterval`).',
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
                explanation:
                    '`Object.is()` — это способ точного сравнения, который учитывает особенности `NaN`. В отличие от `===`, он возвращает `true` для `Object.is(NaN, NaN)`.',
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
                explanation:
                    'Ошибка, выброшенная в `then`, превращается в отклонённый промис. Поэтому `.then(() => { throw 42 })` вызовет ошибку с этим значением.',
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
                explanation:
                    '`Proxy` позволяет перехватывать и изменять поведение операций с объектами: чтение, запись, удаление свойств, вызовы функций и другое. Это мощный инструмент метапрограммирования.',
            },
        ],
    },
};
