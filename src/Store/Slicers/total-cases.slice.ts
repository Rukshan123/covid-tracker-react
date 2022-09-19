import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    covidCaseDetails: [],
    totalCountryArrLength: 0,
    countryWiseCount: [],
};

export const TotalCasesSlice = createSlice({
    name: "TotalCasesSlicer",
    initialState,
    reducers: {
        getTotalCases: (state, action) => {
            state.covidCaseDetails = action.payload.covidCaseDetails;
            state.totalCountryArrLength = action.payload.totalCountryArrLength;
            state.countryWiseCount = action.payload.countryWiseCount;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getTotalCases } = TotalCasesSlice.actions;

export const TotalCasesReducers = TotalCasesSlice.reducer;
