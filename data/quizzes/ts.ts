export const quiz = {
    slug: 'ts',
    title: 'TypeScript',
    questions: [
        {
            name: 'q1',
            question: 'Какой тип у функции, которая никогда не возвращает значение (например, бросает исключение)?',
            options: [
                { label: '`never`', value: 'never' },
                { label: '`void`', value: 'void' },
                { label: '`undefined`', value: 'undefined' },
                { label: '`null`', value: 'null' }
            ],
            correctAnswer: 'never'
        },
        {
            name: 'q2',
            question: 'Какой способ позволяет ограничить объект строго определёнными ключами?',
            options: [
                { label: '`object`', value: 'object' },
                { label: '`any`', value: 'any' },
                { label: '`Record<"a" | "b", string>`', value: 'record' },
                { label: '`Partial<T>`', value: 'partial' }
            ],
            correctAnswer: 'record'
        },
        {
            name: 'q3',
            question: 'Чем отличается `interface` от `type`?',
            options: [
                { label: 'interface быстрее компилируется', value: 'speed' },
                { label: 'interface можно расширять декларативно', value: 'interface' },
                { label: 'type нельзя использовать с generic', value: 'nogeneric' },
                { label: 'type используется только для функций', value: 'functions' }
            ],
            correctAnswer: 'interface'
        },
        {
            name: 'q4',
            question: 'Как создать дженерик тип для функции, возвращающей Promise с типом?',
            options: [
                { label: '`function fn<T>(): T`', value: 'direct' },
                { label: '`function fn<T>(): Promise<T>`', value: 'promise' },
                { label: '`function<T> fn(): Promise`', value: 'wrong1' },
                { label: '`fn = <T>() => T`', value: 'wrong2' }
            ],
            correctAnswer: 'promise'
        },
        {
            name: 'q5',
            question: 'Какой тип использовать, если объект может быть либо `User`, либо `Admin` с разными полями?',
            options: [
                { label: 'Intersection type', value: 'intersection' },
                { label: 'Mapped type', value: 'mapped' },
                { label: 'Literal type', value: 'literal' },
                { label: 'Discriminated union', value: 'union' }
            ],
            correctAnswer: 'union'
        }
    ]
}
