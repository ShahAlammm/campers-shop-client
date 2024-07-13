import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Ensure you're importing from 'react'

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (data) => {
        return {
          url: "/products",
          method: "GET",
          params: data,
        };
      },
      providesTags: ["product"],
    }),
    getProduct: builder.query({
      query: (category) => {
        const params = new URLSearchParams();
        if (params) {
          params.append("category", category);
        }

        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (options) => ({
        url: `/products/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useAddProductMutation, useGetProductQuery,useGetAllProductQuery } = baseApi;
