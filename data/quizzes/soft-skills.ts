export const quiz = {
    slug: 'soft-skills',
    title: 'Soft Skills',
    questions: [
        {
            name: 'q1',
            question: 'Как правильно поступить, если в команде возник конфликт?',
            options: [
                { label: 'Игнорировать и продолжать работу', value: 'ignore' },
                { label: 'Обратиться к руководителю без попыток решить', value: 'escalate' },
                { label: 'Открыто обсудить и искать компромисс', value: 'discuss' },
                { label: 'Выйти из чата и работать самостоятельно', value: 'exit' }
            ],
            correctAnswer: 'discuss'
        },
        {
            name: 'q2',
            question: 'Что считается хорошей практикой при получении негативного фидбэка?',
            options: [
                { label: 'Выслушать и задать уточняющие вопросы', value: 'listen' },
                { label: 'Сразу оправдываться', value: 'defend' },
                { label: 'Перевести тему', value: 'redirect' },
                { label: 'Оспаривать каждую деталь', value: 'argue' }
            ],
            correctAnswer: 'listen'
        },
        {
            name: 'q3',
            question: 'Какой способ помогает эффективно управлять временем?',
            options: [
                { label: 'Работа без перерывов', value: 'no-breaks' },
                { label: 'Ответ на все входящие сообщения немедленно', value: 'instant' },
                { label: 'Параллельная работа над всеми задачами', value: 'multitask' },
                { label: 'Приоритизация задач и тайм-блокинг', value: 'prioritize' }
            ],
            correctAnswer: 'prioritize'
        },
        {
            name: 'q4',
            question: 'Как действовать, если ты не знаешь, как выполнить задачу?',
            options: [
                { label: 'Удалить её из списка задач', value: 'remove' },
                { label: 'Молчать и пробовать что угодно', value: 'guess' },
                { label: 'Задать вопросы и прояснить детали', value: 'ask' },
                { label: 'Ждать, пока её передадут другому', value: 'wait' }
            ],
            correctAnswer: 'ask'
        },
        {
            name: 'q5',
            question: 'Как лучше всего поддерживать продуктивную командную атмосферу?',
            options: [
                { label: 'Перекладывать ответственность', value: 'shift' },
                { label: 'Регулярно давать конструктивную обратную связь', value: 'feedback' },
                { label: 'Изолироваться и работать в одиночку', value: 'solo' },
                { label: 'Участвовать только в обязательных встречах', value: 'minimal' }
            ],
            correctAnswer: 'feedback'
        }
    ]
}
