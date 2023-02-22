import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiSliceReducers, apiSliceMiddlewares, apiSlice } from '../+app/api/apiSlice';
import { authReducer } from './auth/authSlice';
// import { cartReducer } from '~/store/cart/cartSlice';
// import { agenciesReducer } from '~/store/agency/agencySlice.ts';
// import { uiReducer } from '~/store/ui/uiSlice';
// import { adminReducer } from '~/store/admin/adminSlice';

// import { notificationsReducer } from '~/store/notifications/notificationsSlice';
// import { userReducer } from '~/store/getUser/userSlice';


export const store = configureStore({
    reducer: {
        ...apiSliceReducers,
        // [apiSlice.reducerPath]: [apiSlice.reducers],
        auth: authReducer,
        // agencies: agenciesReducer,
        // ui: uiReducer,
        // admin: adminReducer,
        // cart: cartReducer,
        // users: userReducer,
        // notifications: notificationsReducer,
    },
    devTools: import.meta.env.MODE !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);
