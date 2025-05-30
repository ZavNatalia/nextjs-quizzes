'use client';

import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import type { FieldProps } from 'formik';
import * as Yup from 'yup';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Radio,
    RadioGroup,
    VStack,
    Box,
    useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { markQuizAsCompleted } from '@/store/quizProgressSlice';

interface QuizQuestion {
    name: string;
    question: string;
    options: { label: string; value: string }[];
    correctAnswer: string;
    explanation?: string;
}

interface Quiz {
    slug: string;
    title: string;
    questions: QuizQuestion[];
}

export default function QuizForm({
    quiz,
    level,
}: {
    quiz: Quiz;
    level: 'junior' | 'middle' | 'senior';
}) {
    const { questions } = quiz;
    const toast = useToast();
    const dispatch = useDispatch();

    const initialValues = Object.fromEntries(questions.map((q) => [q.name, '']));

    const validationSchema = Yup.object(
        Object.fromEntries(
            questions.map((q) => [q.name, Yup.string().required('Выберите один из вариантов')])
        )
    );

    const [hasSubmitted, setHasSubmitted] = useState(false);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { setSubmitting, setErrors }) => {
                try {
                    const unanswered = Object.entries(values).filter(([, value]) => !value);
                    if (unanswered.length > 0) {
                        const errorObj = Object.fromEntries(
                            unanswered.map(([key]) => [key, 'Выберите один из вариантов'])
                        );
                        setErrors(errorObj);
                        setSubmitting(false);
                        return;
                    }

                    const incorrect = questions.filter((q) => values[q.name] !== q.correctAnswer);
                    const errorObj = Object.fromEntries(
                        incorrect.map((q) => [q.name, 'Неверный ответ'])
                    );
                    setErrors(errorObj);

                    if (incorrect.length === 0) {
                        dispatch(markQuizAsCompleted({ slug: quiz.slug, level }));
                        toast({
                            title: 'Поздравляем!',
                            description: 'Все ответы верны 🎉',
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        });
                    }

                    setHasSubmitted(true);
                } catch (e) {
                    console.error('Ошибка:', e);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ isSubmitting, values }) => (
                <Form>
                    <VStack spacing={6} align="stretch">
                        {questions.map(({ name, question, options, explanation }) => (
                            <Box key={name}>
                                <Field name={name}>
                                    {({ field, form }: FieldProps) => (
                                        <FormControl
                                            isInvalid={!!form.errors[name] && !!form.touched[name]}
                                            as="fieldset"
                                        >
                                            <FormLabel as="legend" fontWeight="bold">
                                                {question}
                                            </FormLabel>
                                            <RadioGroup
                                                onChange={(val: string) => {
                                                    form.setFieldValue(name, val);
                                                    form.setFieldTouched(name, true);
                                                    if (form.errors[name]) {
                                                        form.setFieldError(name, undefined);
                                                    }
                                                }}
                                                value={field.value}
                                            >
                                                <VStack align="start" spacing={2}>
                                                    {options.map(({ label, value }) => (
                                                        <Radio
                                                            key={value}
                                                            value={value}
                                                            bg="bg"
                                                            color="white"
                                                            borderColor="border"
                                                            _checked={{
                                                                bg: 'primary',
                                                                color: 'white',
                                                                borderColor: 'primary',
                                                            }}
                                                        >
                                                            {label}
                                                        </Radio>
                                                    ))}
                                                </VStack>
                                            </RadioGroup>
                                            <FormErrorMessage>
                                                {typeof form.errors[name] === 'string'
                                                    ? form.errors[name]
                                                    : undefined}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                {hasSubmitted && explanation && (
                                    <Accordion allowToggle mt={2}>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Объяснение
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4} fontSize="sm">
                                                {explanation}
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                )}
                            </Box>
                        ))}

                        <Button
                            type="submit"
                            colorScheme="brand"
                            isLoading={isSubmitting}
                            alignSelf="flex-start"
                            isDisabled={!Object.values(values).some(Boolean) || isSubmitting}
                        >
                            Проверить ответы
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    );
}
