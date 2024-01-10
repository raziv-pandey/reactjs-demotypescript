import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//Server/jsonserver
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006" }),
  tagTypes: ["IUser"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => {
        return {
          url: `/users?email=${loginData.email}&password=${loginData.password}`,
          method: "get",
          formData: true,
        };
      },
    }),
      signUpUser: builder.mutation({
          query: (loginData) => {
            return {
              url: `/users`,
              method: "post",
              body: loginData,
              formData:true
            };
          },
    })
  }),
});

export const { useLoginUserMutation, useSignUpUserMutation } = authApi;
