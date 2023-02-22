import { apiSlice } from 'app/api/apiSlice';
import { apiConfig } from 'core/config/apiConfig';

interface User {
    id: number
    name: string
}
type UserResponse = User[];


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query<UserResponse, void>({
            query: (agencyId) => `${apiConfig.userGet}/${agencyId}`,
            providesTags: (result, error, args) => {
                console.log({result, error, args});
                return result
                    ? [...result.map(user => ({ type: 'User' as const, id: user.id })), 'Users']
                    : ['Users']
            },
            transformResponse: (response: any, meta, arg) => {
                console.log('getUsers', response);
                if (response?.result) {
                    return response.result.map((user: any, idx: number) => ({...user, order: idx + 1}));
                }

                throw new Error(response.message);
            },
            transformErrorResponse: (response: any, meta, arg) => response.status,
        }),
    }),
});

export const { useGetUserQuery } = usersApiSlice;
