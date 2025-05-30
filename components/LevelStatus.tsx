'use client';

import { useAppSelector } from '@/store/hooks';

interface Props {
    slug: string;
    level: 'junior' | 'middle' | 'senior';
    children: React.ReactNode;
}

export default function LevelStatus({ slug, level, children }: Props) {
    const completed = useAppSelector(
        (state) => state.quizProgress.completed?.[slug]?.[level] ?? false
    );

    return (
        <>
            {children}
            {completed && ' ✅'}
        </>
    );
}
