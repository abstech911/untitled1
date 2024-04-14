import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// const generateQueryStr = (baseString: string, query: Object): string => {
//     const queryString: string =
//         baseString +
//         Object.entries(query)
//             .map(([key, value]) => `${key}=${value}`)
//             .join("&");
//
//     return queryString;
// };

export const exampleApi = createApi({
    reducerPath: 'inputApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        prepareHeaders: (headers)=>{
            return headers
        }
    }),
    endpoints: (builder) =>({
        getUsers : builder.query<any, String>({
            query(arg ) {
                const  query = '/users';

                return {url: query}
            }
        }),
        getPosts: builder.query<any, String>({
            query(arg:String) {
                const  query = '/posts';
                return {url: query}
            }
        })
    })
})

export const { useGetUsersQuery, useGetPostsQuery } = exampleApi;
