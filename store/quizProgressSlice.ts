import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizProgressState {
    completed: Record<string, { junior: boolean; middle: boolean; senior: boolean }>;
}

const initialState: QuizProgressState = {
    completed: {},
};

const quizProgressSlice = createSlice({
    name: 'quizProgress',
    initialState,
    reducers: {
        markQuizAsCompleted: (
            state,
            action: PayloadAction<{ slug: string; level: 'junior' | 'middle' | 'senior' }>
        ) => {
            const { slug, level } = action.payload;

            // если это первая запись — создаём шаблон
            if (!state.completed[slug]) {
                state.completed[slug] = {
                    junior: false,
                    middle: false,
                    senior: false,
                };
            }

            // отмечаем пройденный уровень
            state.completed[slug][level] = true;
        },

        resetQuizProgress: (state, action: PayloadAction<{ slug: string }>) => {
            // сбрасываем весь прогресс по тесту
            delete state.completed[action.payload.slug];
        },
    },
});

export const { markQuizAsCompleted, resetQuizProgress } = quizProgressSlice.actions;
export default quizProgressSlice.reducer;
