import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementAmount: (state) => {
            state.value += 5
        }
    }
})

export const {increment, incrementAmount} = counterSlice.actions
export const counterReducer = counterSlice.reducer