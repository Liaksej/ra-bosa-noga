import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/lib/redux/features/cart/cartSlice";
import { catalogApi } from "@/lib/redux/services/catalogApi";
import { searchReducer } from "@/lib/redux/features/search/searchSlice";
import { localStorageMiddleware } from "@/lib/redux/middleware";

const preloadedState = {
  cart:
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("cart") || "{}"),
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      cart: cartReducer,
      search: searchReducer,
      [catalogApi.reducerPath]: catalogApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        localStorageMiddleware,
        catalogApi.middleware,
      ]),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
