import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    getSalesHits: builder.query({
      query: () => "top-sales",
    }),
    getItems: builder.query({
      query: () => "items",
    }),
    getCategories: builder.query({
      query: () => "categories",
    }),
  }),
});

export const { useGetSalesHitsQuery, useGetCategoriesQuery, useGetItemsQuery } =
  catalogApi;
