import { createSlice } from '@reduxjs/toolkit'

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

    }
})

export default counterSlice.reducer;
