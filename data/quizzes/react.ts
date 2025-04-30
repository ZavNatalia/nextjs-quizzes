export const quiz = {
    slug: 'react',
    title: 'React',
    questions: [
        {
            name: 'q1',
            question: 'Можно ли вызывать хук внутри условия?',
            options: [
                { label: 'Да', value: 'yes' },
                { label: 'Только useEffect', value: 'onlyEffect' },
                { label: 'Только в классовом компоненте', value: 'classOnly' },
                { label: 'Нет', value: 'no' }
            ],
            correctAnswer: 'no'
        },
        {
            name: 'q2',
            question: 'Что делает `useMemo`?',
            options: [
                { label: 'Создает состояние', value: 'state' },
                { label: 'Кеширует вычисления', value: 'memo' },
                { label: 'Обрабатывает события', value: 'event' },
                { label: 'Рендерит DOM', value: 'render' }
            ],
            correctAnswer: 'memo'
        },
        {
            name: 'q3',
            question: 'Что делает `React.StrictMode`?',
            options: [
                { label: 'Проверяет потенциальные ошибки', value: 'strict' },
                { label: 'Включает строгую типизацию', value: 'types' },
                { label: 'Оптимизирует сборку', value: 'optimize' },
                { label: 'Запускает сервер', value: 'server' }
            ],
            correctAnswer: 'strict'
        },
        {
            name: 'q4',
            question: 'Как передать компонент как пропс?',
            options: [
                { label: '{Component}', value: 'value' },
                { label: '<Component />', value: 'element' },
                { label: '() => <Component />', value: 'fn' },
                { label: '<Component>props</Component>', value: 'child' }
            ],
            correctAnswer: 'fn'
        },
        {
            name: 'q5',
            question: 'Что произойдёт при обновлении `useState` с тем же значением?',
            options: [
                { label: 'Компонент ререндерится', value: 'render' },
                { label: 'Сработает useEffect', value: 'effect' },
                { label: 'Ререндер не произойдёт', value: 'noRender' },
                { label: 'Сбросится DOM', value: 'reset' }
            ],
            correctAnswer: 'noRender'
        }
    ]
}
