export const quiz = {
    slug: 'rtk',
    title: 'Redux Toolkit',
    levels: {
        junior: [
            {
                name: 'q1',
                question: 'Зачем в RTK нужен `configureStore` вместо «ручного» `createStore` из redux?',
                options: [
                    {label: 'Добавляет DevTools и Immer по умолчанию', value: 'defaults'},
                    {label: 'Создаёт slice-редюсеры автоматически', value: 'auto-slice'},
                    {label: 'Ничего не делает, просто обёртка', value: 'nothing'},
                    {label: 'Работает только с RTK Query', value: 'rtkq-only'},
                ],
                correctAnswer: 'defaults',
                explanation:
                    '`configureStore` идёт «из коробки» со всем необходимым: автоматически включает Redux DevTools, `redux-thunk`, Immer-редьюсер и проверки (serializable / immutable checks).',
            },
            {
                name: 'q2',
                question: 'Что возвращает `createSlice()` помимо редьюсера?',
                options: [
                    {label: 'Только экшены', value: 'actions'},
                    {label: 'Редьюсер и сгенерированные экшены', value: 'both'},
                    {label: 'Только типы', value: 'types'},
                    {label: 'Async-thunks', value: 'thunks'},
                ],
                correctAnswer: 'both',
                explanation:
                    '`createSlice` генерирует редьюсер + объект `actions`, где каждый метод-редьюсер превращается в `createAction` с уникальным type.',
            },
            {
                name: 'q3',
                question:
                    'Почему в RTK редьюсеры можно писать как будто изменяя состояние напрямую (например, `state.value++`)?',
                options: [
                    {label: 'RTK копирует объекты вручную', value: 'copy'},
                    {label: 'Используется Immer, который делает иммутабельные копии под капотом', value: 'immer'},
                    {label: 'State в RTK изначально изменяемый', value: 'mutable'},
                    {label: 'Это не разрешено, вызовет ошибку', value: 'error'},
                ],
                correctAnswer: 'immer',
                explanation:
                    'RTK подключает **Immer**. Вы пишете императивно (`state.count++`), а Immer формирует новую неизменяемую версию состояния.',
            },
            {
                name: 'q4',
                question: 'Какой хук React-Redux используют для чтения данных из стора?',
                options: [
                    {label: '`useSelector`', value: 'selector'},
                    {label: '`useDispatch`', value: 'dispatch'},
                    {label: '`useStore`', value: 'store'},
                    {label: '`useAction`', value: 'action'},
                ],
                correctAnswer: 'selector',
                explanation:
                    '`useSelector` подписывается на store и возвращает выбранный кусок стейта, перерисовывая компонент только при изменении этого среза.',
            },
            {
                name: 'q5',
                question: 'Что делает `createAction("counter/reset")`?',
                options: [
                    {label: 'Создаёт экшен-creator с type `"counter/reset"`', value: 'creator'},
                    {label: 'Регистрирует редьюсер', value: 'reducer'},
                    {label: 'Добавляет middleware', value: 'mw'},
                    {label: 'Ничего — устаревшая функция', value: 'nothing'},
                ],
                correctAnswer: 'creator',
                explanation:
                    '`createAction` возвращает функцию-creator с полем `type`. Её можно диспатчить или использовать в `extraReducers`.',
            },
        ],

        middle: [
            {
                name: 'q1',
                question: 'Какой тип (fulfilled / pending / rejected) создаёт `createAsyncThunk` автоматически?',
                options: [
                    {label: 'Все три', value: 'all'},
                    {label: 'Только fulfilled', value: 'fulfilled'},
                    {label: 'Только pending', value: 'pending'},
                    {label: 'Никакие, нужно писать вручную', value: 'none'},
                ],
                correctAnswer: 'all',
                explanation:
                    '`createAsyncThunk` отдаёт **три** action-creator’а: `<name>/pending`, `<name>/fulfilled`, `<name>/rejected` и автоматически диспатчит их в процессе.',
            },
            {
                name: 'q2',
                question: 'Для чего нужен `createEntityAdapter`?',
                options: [
                    {label: 'Для генерации `slice`', value: 'slice'},
                    {label: 'Для нормализации коллекций (ids + entities)', value: 'normalize'},
                    {label: 'Для создания thunk’ов', value: 'thunk'},
                    {label: 'Для мемоизации селекторов', value: 'memo'},
                ],
                correctAnswer: 'normalize',
                explanation:
                    '`createEntityAdapter` держит сущности в формате `{ ids: [], entities: { id: entity } }` и даёт готовые редьюсеры/селекторы для операций с коллекцией.',
            },
            {
                name: 'q3',
                question: 'Как добавить «своё» middleware в `configureStore`?',
                options: [
                    {label: 'Свойство `middleware` — функция `getDefaultMiddleware().concat(myMw)`', value: 'concat'},
                    {label: 'Прописать `middlewares` в параметрах slice', value: 'slice'},
                    {label: 'Импортировать вручную `applyMiddleware`', value: 'apply'},
                    {label: 'Нужно патчить DevTools', value: 'devtools'},
                ],
                correctAnswer: 'concat',
                explanation:
                    'Функция-коллбек `middleware` позволяет расширить дефолтный список (`redux-thunk`, проверки) методом `concat` или `prepend`.',
            },
            {
                name: 'q4',
                question: 'Как в RTK Query отключить кеш для конкретного запроса?',
                options: [
                    {label: 'Параметр `keepUnusedDataFor: 0`', value: 'keep0'},
                    {label: 'Флаг `refetchOnMountOrArgChange`', value: 'refetch'},
                    {label: 'Передать `{ force: true }` в hook', value: 'force'},
                    {label: 'Никак — RTKQ всегда кеширует', value: 'no'},
                ],
                correctAnswer: 'keep0',
                explanation:
                    'Свойство `keepUnusedDataFor` в описании эндпоинта задаёт время жизни кеша. `0` — данные удалятся сразу после размонтирования.',
            },
            {
                name: 'q5',
                question: 'Что возвращает хук `useSelector` с `shallowEqual`?',
                options: [
                    {label: 'Мемоизированное значение с поверхностным сравнением', value: 'shallow'},
                    {label: 'Всегда новый объект', value: 'new'},
                    {label: 'Ничего, только подписывается', value: 'void'},
                    {label: 'Только функцию-селектор', value: 'func'},
                ],
                correctAnswer: 'shallow',
                explanation:
                    'Вторым аргументом можно передать функцию сравнения (чаще `shallowEqual`), чтобы предотвратить перерисовку при равенстве по поверхностным полям.',
            },
        ],

        senior: [
            {
                name: 'q1',
                question: 'Зачем нужен `listenerMiddleware` (RTK ≥ 1.9)?',
                options: [
                    {label: 'Для логирования', value: 'log'},
                    {label: 'Для побочных эффектов без thunk / saga, с match-фильтрами', value: 'effects'},
                    {label: 'Только для RTK Query', value: 'rtkq'},
                    {label: 'Это устаревший API', value: 'old'},
                ],
                correctAnswer: 'effects',
                explanation:
                    '`createListenerMiddleware` даёт декларативные side-effects: можно слушать экшены по `matcher`-функциям, отменять, отлавливать `start/stop` — всё с типами и отладкой.',
            },
            {
                name: 'q2',
                question: 'Что делает callback `prepare` в `createSlice`?',
                options: [
                    {label: 'Валидацию payload', value: 'validate'},
                    {label: 'Преобразует аргументы в `payload`/`meta` и timestamp', value: 'prepare'},
                    {label: 'Асинхронный редьюсер', value: 'async'},
                    {label: 'Создаёт thunk', value: 'thunk'},
                ],
                correctAnswer: 'prepare',
                explanation:
                    '`prepare` вызывается ДО редьюсера, позволяет вернуть объект `{ payload, meta, error }`. Полезно для генерации `id`, установки времени и т.п.',
            },
            {
                name: 'q3',
                question: 'Как в RTK Query отменить запрос из listenerMiddleware?',
                options: [
                    {label: '`api.util.cancelQueries(...)`', value: 'cancel'},
                    {label: 'Нужно dispatch `abort`', value: 'abort'},
                    {label: 'Функция `skipToken`', value: 'skip'},
                    {label: 'RTKQ не поддерживает отмену', value: 'no'},
                ],
                correctAnswer: 'cancel',
                explanation:
                    '`api.util.cancelQueries(arg)` позволит принудительно отменить запросы/invalidate. Это используется в listener’ах для race-condition сценариев.',
            },
            {
                name: 'q4',
                question: 'Что нового появилось в RTK 2.0 (2024-2025) для «slice reducers»?',
                options: [
                    {label: 'Встроенный ESLint-plugin', value: 'lint'},
                    {label: 'Автоматический “slice preloading”', value: 'preload'},
                    {label: 'Полная поддержка ESM-tree-shaking без `process.env.NODE_ENV`', value: 'esm'},
                    {label: 'React-Server-Components медиатор', value: 'rsc'},
                ],
                correctAnswer: 'esm',
                explanation:
                    'RTK 2.0 перешёл на чистый ESM-бандл, убрав NODE_ENV-гварды. Это улучшает tree-shaking, особенно в броузерах/бандлерах 2024+.',
            },
            {
                name: 'q5',
                question: 'Как typed `matchers` помогают в extraReducers builder API?',
                options: [
                    {
                        label: 'Позволяют обрабатывать несколько экшенов одной функцией с типизацией payload',
                        value: 'match'
                    },
                    {label: 'Создают union-action тип', value: 'union'},
                    {label: 'Используются только для RTKQ', value: 'rtkq'},
                    {label: 'Не поддерживаются в TS', value: 'no'},
                ],
                correctAnswer: 'match',
                explanation:
                    '`builder.addMatcher(actionCreator.match, reducer)` — TypeScript выводит тип `payload`/`state` по экшену, сохраняя безопасность кода при DRY-обработке.',
            },
        ],
    },
};
