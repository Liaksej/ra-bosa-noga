import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

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
      }: {
        offset: number;
        categoryId: number | null;
      }) => ({
        url: "items",
        params: categoryId
          ? {
              offset: offset,
              categoryId: categoryId ? categoryId : null,
            }
          : { offset: offset },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, args) => {
        if (args.arg.offset === 0) {
          return (currentCache = [...newItems]);
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
