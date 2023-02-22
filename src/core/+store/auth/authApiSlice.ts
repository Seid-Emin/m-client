import { apiSlice } from 'app/api/apiSlice.js';
import { apiConfig } from 'core/config/apiConfig';

interface User {
    id: number
    name: string
}


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<User, object>({
            query: (args) => {
                return {
                    url: apiConfig.login,
                    method: 'POST',
                    body: { ...args },
                };
            },
            transformResponse: (response: any, meta, arg) => {
                console.log('login transformResponse', { response });
                return response.result;
            },
            transformErrorResponse: (response: any, meta, arg) => response.message || response.result.status,
            invalidatesTags: ['User']
        }),
        logout: builder.mutation({
            query: (args) => {
                return {
                    url: apiConfig.logout,
                    method: 'POST',
                    body: { ...args },
                };
            },
            transformResponse: (response, meta, arg) => {
                console.log('logout transformErrorResponse', { response });
                return response;
            },
            transformErrorResponse: (response: any, meta, arg) => response.message || response.result.status,
            invalidatesTags: ['User',]
        }),
        persistLogin: builder.mutation({
            query: (args) => {
                return {
                    url: apiConfig.persistLogin,
                    method: 'POST',
                };
            },
            transformResponse: (response: any, meta, arg) => {
                console.log('transformResponse', { response });
                return response.result;
            },
            transformErrorResponse: (response: any, meta, arg) => response.message || response.result.status,
        }),
    }),
});

export const {
    useLoginMutation,
    usePersistLoginMutation,
    useLogoutMutation,
} = authApiSlice;
