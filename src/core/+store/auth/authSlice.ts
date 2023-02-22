import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    settings: {
      ui: {
        theme: 'light',
      },
    },
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      console.log(action.payload);
      if (user) {
        state.user = user;
      }

      console.log('setCredentials payload', action.payload);

      state.token = token;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    logoutAction: () => initialState,
    toggleTheme: (state, action) => {
      state.user.settings.ui.theme = action.payload;
    }
  },
});

export const { actions: { setCredentials, updateToken, logoutAction, toggleTheme }, reducer: authReducer } = authSlice;
