import { configureStore } from "@reduxjs/toolkit";
import { TotalCasesReducers } from "./Slicers/total-cases.slice.ts";

export const store = configureStore({
    reducer: {
        totalCases: TotalCasesReducers,
    },
});
