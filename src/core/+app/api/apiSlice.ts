import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, updateToken, logoutAction } from 'store/auth/authSlice';
import { apiConfig } from 'core/config/apiConfig';


const baseQuery = fetchBaseQuery({
    baseUrl: apiConfig.baseUrl,
    // credentials: 'include',
    // withCredentials: true,
    // sameSite: 'None',
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');

        const token = localStorage.accessToken;

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
    let result: any = await baseQuery(args, api, extraOptions);
    console.log({ result });
    if (result?.error?.originalStatus === 403 || result?.result?.message === 'Not authorised!' || result?.data?.message === 'Not authorised!') {
        console.log('sending refresh token');
        // send refresh token to get new access token

        const refreshResult: any = await baseQuery(apiConfig.refresh, api, extraOptions);
        console.log({ refreshResult });

        if (refreshResult?.data?.token) {
            const user = api.getState().auth.user;

            // store the new token
            api.dispatch(setCredentials({ token: refreshResult.data.token, data: user.email ? user : refreshResult.data.user }));

            //retry the original query with new accessToken
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logoutAction());
        }
    }
    console.log({ result });
    if (result?.data?.message) {
        return { error: { message: result?.data?.message } }
    }
    // if (result?.data?.errors) {
    //     api.dispatch(setError(result?.data?.errors[0].message))
    //     toast(result?.data?.errors[0].message, {position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",})
    //     return { error: { status: result?.data?.errors[0].extensions.statusCode, message: result?.data?.errors[0].message } }
    // }

    if (result?.token) {
        api.dispatch(updateToken(result.token));
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['User'],
    endpoints: builder => ({}),
});

export const apiSliceReducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
};

export const apiSliceMiddlewares = [apiSlice.middleware];
