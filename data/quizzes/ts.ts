export const quiz = {
    slug: 'ts',
    title: 'TypeScript',
    levels: {
        junior: [
            {
                name: 'q1',
                question: 'Какой тип у функции, которая никогда не возвращает значение (например, бросает исключение)?',
                options: [
                    { label: '`never`', value: 'never' },
                    { label: '`null`', value: 'null' },
                    { label: '`void`', value: 'void' },
                    { label: '`undefined`', value: 'undefined' }
                ],
                correctAnswer: 'never'
            },
            {
                name: 'q2',
                question: 'Какой способ позволяет ограничить объект строго определёнными ключами?',
                options: [
                    { label: '`object`', value: 'object' },
                    { label: '`Partial<T>`', value: 'partial' },
                    { label: '`Record<"a" | "b", string>`', value: 'record' },
                    { label: '`any`', value: 'any' }
                ],
                correctAnswer: 'record'
            },
            {
                name: 'q3',
                question: 'Чем отличается `interface` от `type`?',
                options: [
                    { label: 'interface быстрее компилируется', value: 'speed' },
                    { label: 'type используется только для функций', value: 'functions' },
                    { label: 'interface можно расширять декларативно', value: 'interface' },
                    { label: 'type нельзя использовать с generic', value: 'nogeneric' }
                ],
                correctAnswer: 'interface'
            },
            {
                name: 'q4',
                question: 'Как создать дженерик тип для функции, возвращающей Promise с типом?',
                options: [
                    { label: '`function<T> fn(): Promise`', value: 'wrong1' },
                    { label: '`function fn<T>(): T`', value: 'direct' },
                    { label: '`fn = <T>() => T`', value: 'wrong2' },
                    { label: '`function fn<T>(): Promise<T>`', value: 'promise' }
                ],
                correctAnswer: 'promise'
            },
            {
                name: 'q5',
                question: 'Какой тип использовать, если объект может быть либо `User`, либо `Admin` с разными полями?',
                options: [
                    { label: 'Literal type', value: 'literal' },
                    { label: 'Discriminated union', value: 'union' },
                    { label: 'Mapped type', value: 'mapped' },
                    { label: 'Intersection type', value: 'intersection' }
                ],
                correctAnswer: 'union'
            }
        ],
        middle: [
            {
                name: 'q1',
                question: 'Что делает `keyof` в TypeScript?',
                options: [
                    { label: 'Возвращает значения объекта', value: 'values' },
                    { label: 'Возвращает имена полей типа', value: 'keys' },
                    { label: 'Создает интерфейс', value: 'interface' },
                    { label: 'Удаляет поля', value: 'omit' }
                ],
                correctAnswer: 'keys'
            },
            {
                name: 'q2',
                question: 'Что делает `typeof` при определении типов?',
                options: [
                    { label: 'Проверяет тип во время выполнения', value: 'runtime' },
                    { label: 'Определяет тип переменной', value: 'type' },
                    { label: 'Возвращает значение', value: 'value' },
                    { label: 'Удаляет тип', value: 'remove' }
                ],
                correctAnswer: 'type'
            },
            {
                name: 'q3',
                question: 'Как сделать поля объекта только для чтения?',
                options: [
                    { label: '`Partial<T>`', value: 'partial' },
                    { label: '`Immutable<T>`', value: 'immutable' },
                    { label: '`Const<T>`', value: 'const' },
                    { label: '`Readonly<T>`', value: 'readonly' }
                ],
                correctAnswer: 'readonly'
            },
            {
                name: 'q4',
                question: 'Что делает условный тип `T extends U ? X : Y`?',
                options: [
                    { label: 'Возвращает union', value: 'union' },
                    { label: 'Фильтрует поля', value: 'filter' },
                    { label: 'Создает interface', value: 'interface' },
                    { label: 'Проверяет тип и выбирает результат', value: 'conditional' }
                ],
                correctAnswer: 'conditional'
            },
            {
                name: 'q5',
                question: 'Как извлечь тип возвращаемого значения функции?',
                options: [
                    { label: '`ReturnType<T>`', value: 'returntype' },
                    { label: '`Infer<T>`', value: 'infer' },
                    { label: '`Extract<T>`', value: 'extract' },
                    { label: '`Unwrap<T>`', value: 'unwrap' }
                ],
                correctAnswer: 'returntype'
            }
        ],
        senior: [
            {
                name: 'q1',
                question: 'Что делает оператор `infer` в условных типах?',
                options: [
                    { label: 'Создает alias', value: 'alias' },
                    { label: 'Сравнивает типы', value: 'compare' },
                    { label: 'Удаляет тип', value: 'remove' },
                    { label: 'Позволяет извлечь тип из выражения', value: 'infer' }
                ],
                correctAnswer: 'infer'
            },
            {
                name: 'q2',
                question: 'Что делает `Exclude<T, U>`?',
                options: [
                    { label: 'Удаляет типы из T, которые есть в U', value: 'exclude' },
                    { label: 'Проверяет совместимость', value: 'compat' },
                    { label: 'Упрощает типы', value: 'simplify' },
                    { label: 'Добавляет типы из U в T', value: 'merge' }
                ],
                correctAnswer: 'exclude'
            },
            {
                name: 'q3',
                question: 'Что делает `as const`?',
                options: [
                    { label: 'Удаляет мутабельность', value: 'remove' },
                    { label: 'Создает тип literal', value: 'literal' },
                    { label: 'Превращает переменную в строку', value: 'string' },
                    { label: 'Делает объект и его поля иммутабельными', value: 'readonly' }
                ],
                correctAnswer: 'readonly'
            },
            {
                name: 'q4',
                question: 'Как работает `satisfies` оператор?',
                options: [
                    { label: 'Проверяет, что значение удовлетворяет типу', value: 'satisfies' },
                    { label: 'Создает alias', value: 'alias' },
                    { label: 'Преобразует тип', value: 'transform' },
                    { label: 'Удаляет поля', value: 'remove' }
                ],
                correctAnswer: 'satisfies'
            },
            {
                name: 'q5',
                question: 'Что делает `Pick<T, K>`?',
                options: [
                    { label: 'Удаляет поля из типа', value: 'omit' },
                    { label: 'Создает новый тип', value: 'new' },
                    { label: 'Маппит типы', value: 'map' },
                    { label: 'Выбирает определённые поля из типа', value: 'pick' }
                ],
                correctAnswer: 'pick'
            }
        ]
    }
}
