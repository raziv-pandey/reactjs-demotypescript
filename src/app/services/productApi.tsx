import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductsResult } from "../models/product.model";

export const productApi = createApi({
  reducerPath: "productDetailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  tagTypes: ['IProductsResult'],
  endpoints: (builder) => ({
    products: builder.query<IProductsResult[], void>({
      query: () => "/products",
      providesTags: ['IProductsResult']
    }),
    product: builder.query<IProductsResult, string>({
      query: (productId) => `/products/${productId}`,
      keepUnusedDataFor: 5,
      providesTags: ['IProductsResult']
    }),
}),
});

export const { useProductsQuery, useProductQuery } = productApi;