import { createSelector, createSlice } from '@reduxjs/toolkit';


const initialState = {
    agencyId: '',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setAgencyId: (state, action) => {
            state.agencyId = action.payload;
        },
    },
});

export const { actions: { setAgencyId }, reducer: uiReducer } = uiSlice;
