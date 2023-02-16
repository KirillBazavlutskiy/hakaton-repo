import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    number: 0,
} as { number: number }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.number++;
        },
        decrement(state) {
            state.number--;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;