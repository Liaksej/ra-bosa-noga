import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware<{}, any> =
  (store) => (next) => (action) => {
    const result = next(action);
    let cart = store.getState().cart;
    typeof window !== "undefined" &&
      localStorage.setItem("cart", JSON.stringify(cart));
    return result;
  };
