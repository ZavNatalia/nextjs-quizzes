'use client';

import { Button } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetQuizProgress } from '@/store/quizProgressSlice';

interface Props {
    slug: string;
}

export default function ResetProgressButton({ slug }: Props) {
    const dispatch = useAppDispatch();
    const quizProgress = useAppSelector((state) => state.quizProgress.completed?.[slug] ?? null);

    const hasProgress = quizProgress && Object.values(quizProgress).some(Boolean);

    const handleReset = () => {
        dispatch(resetQuizProgress({ slug: slug }));
    };

    if (!hasProgress) return null;

    return (
        <Button
            size="sm"
            colorScheme="red"
            variant="outline"
            onClick={handleReset}
            alignSelf="flex-end"
            mt={4}
        >
            Сбросить прогресс
        </Button>
    );
}
