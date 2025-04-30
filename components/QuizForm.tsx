'use client'

import React from 'react'
import { Field, Form, Formik } from 'formik'
import type { FieldProps } from 'formik'
import * as Yup from 'yup'
import { Button, FormControl, FormErrorMessage, FormLabel, Radio, RadioGroup, VStack } from '@chakra-ui/react'

interface QuizQuestion {
    name: string
    question: string
    options: { label: string; value: string }[]
    correctAnswer: string
}

interface Quiz {
    slug: string
    title: string
    questions: QuizQuestion[]
}

export default function QuizForm({quiz}: { quiz: Quiz }) {
    const {questions} = quiz

    const initialValues = Object.fromEntries(
        questions.map(q => [q.name, ''])
    )

    const validationSchema = Yup.object(
        Object.fromEntries(
            questions.map(q => [
                q.name,
                Yup.string()
                    .required('Выберите один из вариантов')
                    .test('correct-answer', 'Неверный ответ', value => value === q.correctAnswer)
            ])
        )
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, {setSubmitting}) => {
                alert('Поздравляем! Все ответы верны.')
                setSubmitting(false)
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <VStack spacing={6} align="stretch">
                        {questions.map(({name, question, options}) => (
                            <Field name={name} key={name}>
                                {({field, form}: FieldProps) => (
                                    <FormControl isInvalid={Boolean(form.errors[name]) && Boolean(form.touched[name])} as="fieldset">
                                        <FormLabel as="legend" fontWeight="bold">{question}</FormLabel>
                                        <RadioGroup
                                            onChange={(val: string) => form.setFieldValue(name, val)}
                                            value={field.value}
                                        >
                                            <VStack align="start" spacing={2}>
                                                {options.map(({label, value}) => (
                                                    <Radio
                                                        key={value}
                                                        value={value}
                                                        bg='bg'
                                                        color='white'
                                                        borderColor='border'
                                                        _invalid={{
                                                            borderColor: 'red.300',
                                                        }}
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
                                            {typeof form.errors[name] === 'string' ? form.errors[name] : undefined}
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
    )
}
