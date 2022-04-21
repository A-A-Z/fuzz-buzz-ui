// import React, { useState } from 'react'
// import { useAppSelector, useAppDispatch } from '../redux/hooks'
import React from 'react'
import { Form, Field } from 'react-final-form';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { selectFormValues } from '../redux/selectors'
import { start } from '../redux/counterSlice'
import { FormValues, FormRenderValueProps } from '../helpers/interfaces'

const FormContainer = () => {
    const dispatch = useAppDispatch();
    const formValues = useAppSelector(selectFormValues)

    const onSubmit = (values: FormValues): void => {
        console.log('submit', values)
        dispatch(start(values))
    }

    return (
        <section>
            <h2>form</h2>
            <Form 
                onSubmit={onSubmit}
                initialValues={formValues}
                render={FormRender} 
            />
        </section>
    )
}

const FormRender = ({ handleSubmit }: FormRenderValueProps) => {
// const FormRender = (stuff: any) => {
    // const { handleSubmit } = stuff
    // console.log('testme', stuff)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Start</label>
                <Field
                    name="startNum"
                    component="input"
                    type="nunber"
                />
            </div>
            <div>
                <label>End</label>
                <Field
                    name="endNum"
                    component="input"
                    type="text"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormContainer
// <input {...input} {...rest} type="number" />