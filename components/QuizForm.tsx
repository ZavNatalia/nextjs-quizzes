'use client';

import React from 'react';
import { Field, Form, Formik } from 'formik';
import type { FieldProps } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Radio,
    RadioGroup,
    VStack,
} from '@chakra-ui/react';

interface QuizQuestion {
    name: string;
    question: string;
    options: { label: string; value: string }[];
    correctAnswer: string;
}

interface Quiz {
    slug: string;
    title: string;
    questions: QuizQuestion[];
}

export default function QuizForm({ quiz }: { quiz: Quiz }) {
    const { questions } = quiz;

    const initialValues = Object.fromEntries(questions.map((q) => [q.name, '']));

    const validationSchema = Yup.object(
        Object.fromEntries(
            questions.map((q) => [q.name, Yup.string().required('Выберите один из вариантов')])
        )
    );

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { setSubmitting, setErrors }) => {
                const unanswered = Object.entries(values).filter(([_, value]) => !value);
                if (unanswered.length > 0) {
                    // Не все ответы выбраны — показать ошибки
                    const errorObj = Object.fromEntries(
                        unanswered.map(([key]) => [key, 'Выберите один из вариантов'])
                    );
                    setErrors(errorObj);
                    setSubmitting(false);
                    return;
                }

                // Проверка правильности ответов
                const incorrect = questions.filter((q) => values[q.name] !== q.correctAnswer);
                if (incorrect.length > 0) {
                    const errorObj = Object.fromEntries(
                        incorrect.map((q) => [q.name, 'Неверный ответ'])
                    );
                    setErrors(errorObj);
                } else {
                    alert('Поздравляем! Все ответы верны.');
                }

                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <VStack spacing={6} align="stretch">
                        {questions.map(({ name, question, options }) => (
                            <Field name={name} key={name}>
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
                        ))}

                        <Button
                            type="submit"
                            colorScheme="brand"
                            isLoading={isSubmitting}
                            alignSelf="flex-start"
                        >
                            Проверить ответы
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    );
}
