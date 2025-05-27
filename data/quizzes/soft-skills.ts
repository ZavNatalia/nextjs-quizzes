export const quiz = {
    slug: 'soft-skills',
    title: 'Soft Skills',
    levels: {
        junior: [
            {
                name: 'q1',
                question: 'Что важно делать при командной работе?',
                options: [
                    { label: 'Делегировать без объяснения', value: 'blind-delegate' },
                    { label: 'Всегда соглашаться с начальником', value: 'agree' },
                    { label: 'Открыто коммуницировать и делиться статусом', value: 'communicate' },
                    { label: 'Работать без общения', value: 'solo' },
                ],
                correctAnswer: 'communicate',
            },
            {
                name: 'q2',
                question: 'Что лучше всего помогает избежать недопонимания в команде?',
                options: [
                    { label: 'Уточнять и подтверждать договорённости', value: 'clarify' },
                    { label: 'Работать в одиночку', value: 'solo' },
                    { label: 'Не писать документацию', value: 'no-docs' },
                    { label: 'Оставлять инструкции в коде', value: 'code-only' },
                ],
                correctAnswer: 'clarify',
            },
            {
                name: 'q3',
                question: 'Что стоит сделать, если ты заболел?',
                options: [
                    { label: 'Игнорировать симптомы и работать', value: 'ignore' },
                    { label: 'Не отвечать на сообщения', value: 'silent' },
                    { label: 'Просить коллег заменить без предупреждения', value: 'auto-replace' },
                    { label: 'Сообщить команде и взять больничный', value: 'sick-leave' },
                ],
                correctAnswer: 'sick-leave',
            },
            {
                name: 'q4',
                question: 'Как стоит вести себя на командной встрече?',
                options: [
                    { label: 'Молчать всегда', value: 'mute' },
                    { label: 'Уходить при несогласии', value: 'leave' },
                    { label: 'Перебивать всех и говорить первым', value: 'interrupt' },
                    {
                        label: 'Внимательно слушать и вносить предложения',
                        value: 'listen-and-contribute',
                    },
                ],
                correctAnswer: 'listen-and-contribute',
            },
            {
                name: 'q5',
                question: 'Как стоит реагировать на неудачу?',
                options: [
                    { label: 'Признать ошибку и сделать выводы', value: 'own-it' },
                    { label: 'Скрыть проблему', value: 'hide' },
                    { label: 'Сделать вид, что всё в порядке', value: 'pretend' },
                    { label: 'Обвинять коллег', value: 'blame' },
                ],
                correctAnswer: 'own-it',
            },
        ],
        middle: [
            {
                name: 'q6',
                question: 'Как эффективно разрешать конфликты в команде?',
                options: [
                    { label: 'Искать виновного', value: 'blame' },
                    { label: 'Писать анонимные жалобы', value: 'complain' },
                    { label: 'Искать компромисс и слушать аргументы', value: 'resolve' },
                    { label: 'Избегать конфронтации', value: 'avoid' },
                ],
                correctAnswer: 'resolve',
            },
            {
                name: 'q7',
                question: 'Как определить приоритеты задач?',
                options: [
                    { label: 'Брать самые интересные', value: 'interest' },
                    { label: 'Сначала делать простые', value: 'easy-first' },
                    { label: 'Оценить срочность и важность', value: 'priority' },
                    { label: 'Выполнять в порядке поступления', value: 'fifo' },
                ],
                correctAnswer: 'priority',
            },
            {
                name: 'q8',
                question: 'Как убедиться, что фидбэк был понят правильно?',
                options: [
                    { label: 'Изменить тему', value: 'change-topic' },
                    { label: 'Принять без комментариев', value: 'silent' },
                    { label: 'Переосмыслить и переспросить', value: 'confirm' },
                    { label: 'Отказаться слушать', value: 'deny' },
                ],
                correctAnswer: 'confirm',
            },
            {
                name: 'q9',
                question: 'Как мотивировать коллег по команде?',
                options: [
                    { label: 'Поощрять и признавать достижения', value: 'recognize' },
                    { label: 'Игнорировать инициативу', value: 'ignore' },
                    { label: 'Контролировать каждое действие', value: 'micromanage' },
                    { label: 'Постоянно критиковать', value: 'criticize' },
                ],
                correctAnswer: 'recognize',
            },
            {
                name: 'q10',
                question: 'Как убедиться в прозрачности общения?',
                options: [
                    { label: 'Устно передавать', value: 'verbal' },
                    { label: 'Фиксировать договоренности письменно', value: 'document' },
                    { label: 'Полагаться на память', value: 'memory' },
                    { label: 'Не обсуждать открыто', value: 'close' },
                ],
                correctAnswer: 'document',
            },
        ],
        senior: [
            {
                name: 'q11',
                question: 'Как помочь развитию менее опытных коллег?',
                options: [
                    { label: 'Критиковать при всех', value: 'public-crit' },
                    { label: 'Наставничество и делегирование', value: 'mentor' },
                    { label: 'Не вмешиваться', value: 'avoid' },
                    { label: 'Выполнять за них работу', value: 'replace' },
                ],
                correctAnswer: 'mentor',
            },
            {
                name: 'q12',
                question: 'Как управлять ожиданиями заказчика?',
                options: [
                    { label: 'Избегать общения', value: 'avoid' },
                    { label: 'Прозрачно доносить ограничения и прогресс', value: 'manage' },
                    { label: 'Писать без сроков', value: 'unspecific' },
                    { label: 'Обещать всё сразу', value: 'overpromise' },
                ],
                correctAnswer: 'manage',
            },
            {
                name: 'q13',
                question: 'Что важно при ведении сложных переговоров?',
                options: [
                    { label: 'Угрожать уходом', value: 'threat' },
                    { label: 'Прерывать собеседника', value: 'interrupt' },
                    { label: 'Слушать и искать взаимопонимание', value: 'empathy' },
                    { label: 'Навязывать точку зрения', value: 'force' },
                ],
                correctAnswer: 'empathy',
            },
            {
                name: 'q14',
                question: 'Как избежать выгорания у себя и команды?',
                options: [
                    { label: 'Игнорировать жалобы', value: 'ignore' },
                    { label: 'Работать без отпусков', value: 'no-vacation' },
                    { label: 'Следить за балансом и давать отдых', value: 'balance' },
                    { label: 'Нагружать до максимума', value: 'overload' },
                ],
                correctAnswer: 'balance',
            },
            {
                name: 'q15',
                question: 'Как укрепить доверие в распределённой команде?',
                options: [
                    { label: 'Регулярное общение и прозрачность', value: 'trust' },
                    { label: 'Редкие синки', value: 'rare' },
                    { label: 'Только письменные отчеты', value: 'text-only' },
                    { label: 'Контроль каждого шага', value: 'micro' },
                ],
                correctAnswer: 'trust',
            },
        ],
    },
};
