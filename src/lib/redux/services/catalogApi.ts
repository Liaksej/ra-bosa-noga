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
      query: ({
        offset,
        categoryId,
        q,
      }: {
        offset: number;
        categoryId: number | null;
        q: string;
      }) => ({
        url: "items",
        params: categoryId
          ? {
              offset: offset,
              categoryId: categoryId ? categoryId : null,
              q: q ? q : "",
            }
          : { offset: offset, q: q ? q : "" },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, args) => {
        if (args.arg.offset === 0) {
          return [...newItems];
        }
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getCategories: builder.query({
      query: () => "categories",
    }),
  }),
});

export const { useGetSalesHitsQuery, useGetCategoriesQuery, useGetItemsQuery } =
  catalogApi;
