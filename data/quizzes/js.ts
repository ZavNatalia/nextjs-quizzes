export const quiz = {
    slug: 'js',
    title: 'JavaScript',
    levels: {
        junior: [
            {
                name: 'q1',
                question: 'Что вернёт выражение `[] + {} == "[object Object]"`?',
                options: [
                    { label: 'undefined', value: 'undefined' },
                    { label: 'true', value: 'true' },
                    { label: 'TypeError', value: 'typeerror' },
                    { label: 'false', value: 'false' }
                ],
                correctAnswer: 'true',
                explanation:
                    'Сначала `[] + {}` конкатенируется: пустой массив превращается в пустую строку, ' +
                    'объект — в `"[object Object]"`. Сравниваются две одинаковые строки, поэтому результат `true`.'
            },
            {
                name: 'q2',
                question: 'Что вернёт `NaN === NaN`?',
                options: [
                    { label: 'true', value: 'true' },
                    { label: 'false', value: 'false' },
                    { label: 'undefined', value: 'undefined' },
                    { label: 'null', value: 'null' }
                ],
                correctAnswer: 'false',
                explanation:
                    '`NaN` по стандарту не равно ничему, включая само себя, поэтому строгое сравнение даёт `false`.'
            },
            {
                name: 'q3',
                question: 'Чем отличается `let` от `var`?',
                options: [
                    { label: 'var — имеет функциональную область видимости', value: 'scope' },
                    { label: 'let — глобальная переменная', value: 'global' },
                    { label: 'var — создаёт замыкание', value: 'closure' },
                    { label: 'let — не может быть переопределён', value: 'override' }
                ],
                correctAnswer: 'scope',
                explanation:
                    '`var` виден во всей функции (function-scope), а `let` ограничен блоком `{ ... }`.'
            },
            {
                name: 'q4',
                question: 'Как работает оператор опциональной цепочки `?.`?',
                options: [
                    { label: 'Удаляет свойство', value: 'delete' },
                    { label: 'Аналог try/catch', value: 'trycatch' },
                    { label: 'Безопасный доступ к вложенным свойствам', value: 'safe' },
                    { label: 'Только для объектов', value: 'objects' }
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
                    { label: 'Создаёт копию', value: 'clone' }
                ],
                correctAnswer: 'freeze',
                explanation:
                    'Метод помечает свойства как неперезаписываемые/неконфигурируемые. ' +
                    'Однако вложенные объекты остаются изменяемыми, если их не заморозить отдельно.'
            }
        ],
        middle: [
            {
                name: 'q1',
                question: 'Что делает метод `Function.prototype.bind`?',
                options: [
                    { label: 'Навсегда привязывает `this`', value: 'bind' },
                    { label: 'Создаёт замыкание', value: 'closure' },
                    { label: 'Вызывает функцию немедленно', value: 'call' },
                    { label: 'Изменяет прототип', value: 'proto' }
                ],
                correctAnswer: 'bind',
                explanation:
                    '`bind` возвращает новую функцию с закреплённым `this` и (опционально) частично ' +
                    'подставленными аргументами; сама исходная функция не вызывается.'
            },
            {
                name: 'q2',
                question: 'Что создаёт `Object.create(null)`?',
                options: [
                    { label: 'Пустой объект с `__proto__`', value: 'default' },
                    { label: 'Массив', value: 'array' },
                    { label: 'Ошибка', value: 'error' },
                    { label: 'Объект без прототипа', value: 'no_proto' }
                ],
                correctAnswer: 'no_proto',
                explanation:
                    'Такой объект не наследует `Object.prototype`, поэтому у него нет, например, `toString` или `hasOwnProperty`.'
            },
            {
                name: 'q3',
                question: 'Главное отличие `==` и `===`?',
                options: [
                    { label: '`===` проверяет значение и тип без преобразования', value: 'strict' },
                    { label: '`==` выполняет строгое сравнение', value: 'strict2' },
                    { label: '`===` преобразует типы', value: 'coerce' },
                    { label: '`==` используется только с числами', value: 'numbersOnly' }
                ],
                correctAnswer: 'strict',
                explanation:
                    '`==` делает неявное приведение типов (coercion). `===` этого не делает и сравнивает как есть.'
            },
            {
                name: 'q4',
                question: 'Каков результат `typeof Symbol()`?',
                options: [
                    { label: '`symbol`', value: 'symbol' },
                    { label: '`object`', value: 'object' },
                    { label: '`function`', value: 'function' },
                    { label: '`string`', value: 'string' }
                ],
                correctAnswer: 'symbol',
                explanation:
                    'Конструктор `Symbol()` возвращает уникальное значение одноимённого примитивного типа.'
            },
            {
                name: 'q5',
                question: 'Какой из методов **не изменяет** исходный массив?',
                options: [
                    { label: 'reverse', value: 'reverse' },
                    { label: 'filter', value: 'filter' },
                    { label: 'push', value: 'push' },
                    { label: 'splice', value: 'splice' }
                ],
                correctAnswer: 'filter',
                explanation:
                    '`filter` создаёт новый массив; остальные перечисленные методы мутируют оригинал.'
            }
        ],
        senior: [
            {
                name: 'q1',
                question: 'Назначение оператора `void`?',
                options: [
                    { label: 'Проверяет тип', value: 'check' },
                    { label: 'Возвращает `undefined`', value: 'undefined' },
                    { label: 'Создаёт область видимости', value: 'scope' },
                    { label: 'Удаляет переменную', value: 'delete' }
                ],
                correctAnswer: 'undefined',
                explanation:
                    '`void expression` вычисляет выражение и всегда возвращает `undefined`. ' +
                    'Часто используется в ссылках: `href="javascript:void 0"`, чтобы не переходить по адресу.'
            },
            {
                name: 'q2',
                question: 'В какой очереди Event Loop обрабатывает задачи?',
                options: [
                    { label: 'Сначала `setInterval`', value: 'interval' },
                    { label: 'Сначала микротаски, потом макротаски', value: 'micro_macro' },
                    { label: 'Синхронный код в конце', value: 'sync_first' },
                    { label: 'Произвольно', value: 'queue' }
                ],
                correctAnswer: 'micro_macro',
                explanation:
                    'После синхронного стека выполняются **микротаски** (Promises, queueMicrotask), затем **макротаски** (setTimeout, I/O).'
            },
            {
                name: 'q3',
                question: 'Результат `Object.is(NaN, NaN)`?',
                options: [
                    { label: 'true', value: 'true' },
                    { label: 'TypeError', value: 'typeerror' },
                    { label: 'undefined', value: 'undefined' },
                    { label: 'false', value: 'false' }
                ],
                correctAnswer: 'true',
                explanation:
                    '`Object.is` считает `NaN` эквивалентным самому себе (в отличие от `===`).'
            },
            {
                name: 'q4',
                question: 'Что вернёт цепочка `Promise.resolve(10).then(() => { throw 42 })`?',
                options: [
                    { label: 'Промис выполнится', value: 'done' },
                    { label: 'Результат 42', value: '42' },
                    { label: 'undefined', value: 'undef' },
                    { label: 'Отклонённый промис с 42', value: 'error' }
                ],
                correctAnswer: 'error',
                explanation:
                    'Брошенное значение превращает цепочку в **rejected Promise** с этим значением (`42`).'
            },
            {
                name: 'q5',
                question: 'Главная возможность `new Proxy()`?',
                options: [
                    { label: 'Перехватывать операции над объектом', value: 'trap' },
                    { label: 'Удалять методы', value: 'remove' },
                    { label: 'Шифровать объект', value: 'encrypt' },
                    { label: 'Клонировать объект', value: 'clone' }
                ],
                correctAnswer: 'trap',
                explanation:
                    '`Proxy` позволяет определить «ловушки» (`traps`) для операций чтения, записи, вызова и др., переопределяя стандартное поведение объектов.'
            }
        ]
    }
};
