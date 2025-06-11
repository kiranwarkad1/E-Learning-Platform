import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import {} from "@reduxjs/toolkit/query/react";
import { register } from "module";

const USER_API  ="http://localhost:8080/api/v1/user/"
export const authApi = createApi({
     reducerPath:"authApi",
     baseQuery:fetchBaseQuery({
        baseurl:USER_API,
        credentials:'include'
     }),
     endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) =>({
                url: "register",
                method: "POST",
                body:inputData
            })
        }),

        loginUser: builder.mutation({
            query: (inputData) =>({
                url: "register",
                method: "POST",
                body:inputData
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    dispatch(user)
                }
            }
        })
     })
})