// import React, { useState } from 'react'
// import { useAppSelector, useAppDispatch } from '../redux/hooks'
import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectValue } from '../redux/selectors'

const Form = () => {
    const count = useAppSelector(selectValue)
    return (
        <div>form: {count}</div>
    )
}

export default Form
