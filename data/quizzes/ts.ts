export const quiz = {
    slug: 'ts',
    title: 'TypeScript',
    levels: {
        junior: [
            {
                name: 'q1',
                question:
                    'Какой тип у функции, которая никогда не возвращает значение (например, бросает исключение)?',
                options: [
                    { label: '`never`', value: 'never' },
                    { label: '`null`', value: 'null' },
                    { label: '`void`', value: 'void' },
                    { label: '`undefined`', value: 'undefined' },
                ],
                correctAnswer: 'never',
                explanation:
                    'Тип `never` означает, что функция не завершает выполнение нормально — например, выбрасывает исключение или бесконечно выполняется.',
            },
            {
                name: 'q2',
                question: 'Какой способ позволяет ограничить объект строго определёнными ключами?',
                options: [
                    { label: '`object`', value: 'object' },
                    { label: '`Partial<T>`', value: 'partial' },
                    { label: '`Record<"a" | "b", string>`', value: 'record' },
                    { label: '`any`', value: 'any' },
                ],
                correctAnswer: 'record',
                explanation:
                    '`Record<"a" | "b", string>` создаёт тип объекта, у которого только ключи "a" и "b", и значения типа string.',
            },
            {
                name: 'q3',
                question: 'Чем отличается `interface` от `type`?',
                options: [
                    { label: 'interface быстрее компилируется', value: 'speed' },
                    { label: 'type используется только для функций', value: 'functions' },
                    { label: 'interface можно расширять декларативно', value: 'interface' },
                    { label: 'type нельзя использовать с generic', value: 'nogeneric' },
                ],
                correctAnswer: 'interface',
                explanation:
                    '`interface` можно расширять с помощью `extends`, и повторные объявления объединяются. `type` — более универсален, но не поддерживает декларативное расширение.',
            },
            {
                name: 'q4',
                question: 'Как создать дженерик тип для функции, возвращающей Promise с типом?',
                options: [
                    { label: '`function<T> fn(): Promise`', value: 'wrong1' },
                    { label: '`function fn<T>(): T`', value: 'direct' },
                    { label: '`fn = <T>() => T`', value: 'wrong2' },
                    { label: '`function fn<T>(): Promise<T>`', value: 'promise' },
                ],
                correctAnswer: 'promise',
                explanation:
                    'Запись `function fn<T>(): Promise<T>` означает, что функция возвращает промис с результатом типа `T`.',
            },
            {
                name: 'q5',
                question:
                    'Какой тип использовать, если объект может быть либо `User`, либо `Admin` с разными полями?',
                options: [
                    { label: 'Literal type', value: 'literal' },
                    { label: 'Discriminated union', value: 'union' },
                    { label: 'Mapped type', value: 'mapped' },
                    { label: 'Intersection type', value: 'intersection' },
                ],
                correctAnswer: 'union',
                explanation:
                    'Discriminated union (дискриминируемое объединение) позволяет задать тип, который может быть одним из нескольких, обычно с общим дискриминатором (`type`, `role` и т.п.).',
            },
        ],
        middle: [
            {
                name: 'q1',
                question: 'Что делает `keyof` в TypeScript?',
                options: [
                    { label: 'Возвращает значения объекта', value: 'values' },
                    { label: 'Возвращает имена полей типа', value: 'keys' },
                    { label: 'Создает интерфейс', value: 'interface' },
                    { label: 'Удаляет поля', value: 'omit' },
                ],
                correctAnswer: 'keys',
                explanation:
                    '`keyof T` создаёт тип, представляющий все ключи объекта типа `T` в виде объединения строк.',
            },
            {
                name: 'q2',
                question: 'Что делает `typeof` при определении типов?',
                options: [
                    { label: 'Проверяет тип во время выполнения', value: 'runtime' },
                    { label: 'Определяет тип переменной', value: 'type' },
                    { label: 'Возвращает значение', value: 'value' },
                    { label: 'Удаляет тип', value: 'remove' },
                ],
                correctAnswer: 'type',
                explanation:
                    'В контексте типов `typeof` позволяет получить тип переменной или значения, например: `const x = 5; type X = typeof x`.',
            },
            {
                name: 'q3',
                question: 'Как сделать поля объекта только для чтения?',
                options: [
                    { label: '`Partial<T>`', value: 'partial' },
                    { label: '`Immutable<T>`', value: 'immutable' },
                    { label: '`Const<T>`', value: 'const' },
                    { label: '`Readonly<T>`', value: 'readonly' },
                ],
                correctAnswer: 'readonly',
                explanation:
                    '`Readonly<T>` делает все поля объекта неизменяемыми: попытка присвоить новое значение вызовет ошибку компиляции.',
            },
            {
                name: 'q4',
                question: 'Что делает условный тип `T extends U ? X : Y`?',
                options: [
                    { label: 'Возвращает union', value: 'union' },
                    { label: 'Фильтрует поля', value: 'filter' },
                    { label: 'Создает interface', value: 'interface' },
                    { label: 'Проверяет тип и выбирает результат', value: 'conditional' },
                ],
                correctAnswer: 'conditional',
                explanation:
                    'Условные типы позволяют выбирать один тип из двух, в зависимости от того, удовлетворяет ли `T` ограничению `U`.',
            },
            {
                name: 'q5',
                question: 'Как извлечь тип возвращаемого значения функции?',
                options: [
                    { label: '`ReturnType<T>`', value: 'returntype' },
                    { label: '`Infer<T>`', value: 'infer' },
                    { label: '`Extract<T>`', value: 'extract' },
                    { label: '`Unwrap<T>`', value: 'unwrap' },
                ],
                correctAnswer: 'returntype',
                explanation:
                    '`ReturnType<T>` позволяет извлечь тип, возвращаемый функцией типа `T`, например: `type R = ReturnType<() => string>` даст `string`.',
            },
        ],
        senior: [
            {
                name: 'q1',
                question: 'Что делает оператор `infer` в условных типах?',
                options: [
                    { label: 'Создает alias', value: 'alias' },
                    { label: 'Сравнивает типы', value: 'compare' },
                    { label: 'Удаляет тип', value: 'remove' },
                    { label: 'Позволяет извлечь тип из выражения', value: 'infer' },
                ],
                correctAnswer: 'infer',
                explanation:
                    'Оператор `infer` используется внутри условных типов для извлечения подтипа — например, `T extends Array<infer U> ? U : never` извлечёт тип элементов массива.',
            },
            {
                name: 'q2',
                question: 'Что делает `Exclude<T, U>`?',
                options: [
                    { label: 'Удаляет типы из T, которые есть в U', value: 'exclude' },
                    { label: 'Проверяет совместимость', value: 'compat' },
                    { label: 'Упрощает типы', value: 'simplify' },
                    { label: 'Добавляет типы из U в T', value: 'merge' },
                ],
                correctAnswer: 'exclude',
                explanation:
                    '`Exclude<T, U>` создаёт тип, исключая из `T` те члены, которые также присутствуют в `U` — например, `Exclude<"a" | "b", "b">` даст `"a"`.',
            },
            {
                name: 'q3',
                question: 'Что делает `as const`?',
                options: [
                    { label: 'Удаляет мутабельность', value: 'remove' },
                    { label: 'Создает тип literal', value: 'literal' },
                    { label: 'Превращает переменную в строку', value: 'string' },
                    { label: 'Делает объект и его поля иммутабельными', value: 'readonly' },
                ],
                correctAnswer: 'readonly',
                explanation:
                    'Выражение `as const` делает объект иммутабельным и присваивает каждому полю максимально конкретный тип (например, не `string`, а конкретное значение).',
            },
            {
                name: 'q4',
                question: 'Как работает `satisfies` оператор?',
                options: [
                    { label: 'Проверяет, что значение удовлетворяет типу', value: 'satisfies' },
                    { label: 'Создает alias', value: 'alias' },
                    { label: 'Преобразует тип', value: 'transform' },
                    { label: 'Удаляет поля', value: 'remove' },
                ],
                correctAnswer: 'satisfies',
                explanation:
                    '`satisfies` проверяет соответствие типа, при этом сохраняет наиболее узкий тип значения. Это удобно для строгой типизации, не теряя конкретику.',
            },
            {
                name: 'q5',
                question: 'Что делает `Pick<T, K>`?',
                options: [
                    { label: 'Удаляет поля из типа', value: 'omit' },
                    { label: 'Создает новый тип', value: 'new' },
                    { label: 'Маппит типы', value: 'map' },
                    { label: 'Выбирает определённые поля из типа', value: 'pick' },
                ],
                correctAnswer: 'pick',
                explanation:
                    '`Pick<T, K>` создаёт тип, содержащий только указанные поля `K` из типа `T`. Например, `Pick<User, "id" | "name">` оставит только эти поля.',
            },
        ],
    },
};
