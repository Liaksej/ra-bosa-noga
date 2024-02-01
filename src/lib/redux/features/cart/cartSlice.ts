import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<
  number,
  {
    id: number;
    quantity: number;
    size: string;
    price: number;
    title: string;
  }
> = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      {
        payload,
      }: {
        payload: {
          id: number;
          quantity: number;
          size: string;
          price: number;
          title: string;
        };
      },
    ) => {
      if (state[payload.id] && state[payload.id].size === payload.size) {
        state[payload.id].quantity += payload.quantity;
      } else {
        state[payload.id] = {
          id: payload.id,
          quantity: payload.quantity,
          size: payload.size,
          price: payload.price,
          title: payload.title,
        };
      }
    },
    removeFromCart: (state, { payload }: { payload: number }) => {
      delete state[payload];
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
