import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormValues } from '../helpers/interfaces'

export interface CounterState {
    value: number;
    startNum: number;
    endNum: number;
}

const initialState: CounterState = {
    value: 0,
    startNum: 1,
    endNum: 50
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        start: (state, action: PayloadAction<FormValues>) => {
            // const { value } = state
            console.log('start', action.payload)
            state.value = 1;
        }
    }
})

export const { start } = counterSlice.actions;

export default counterSlice.reducer;
