import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
    agencies: [],
    roles: [],
    permissions: []
};

const adminSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setAgencies: (state, action) => {
            state.agencies = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
    },
});

export const { actions: { setAgencies, setRoles }, reducer: adminReducer } = adminSlice;

export const getToken = (state) => state.token;
