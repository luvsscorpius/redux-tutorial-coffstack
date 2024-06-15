import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Features/Counter/Counter-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})