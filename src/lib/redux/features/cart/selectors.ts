import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/redux/store";

export const selectCartModule = (state: RootState) => state.cart;

export const selectCartList = createSelector([selectCartModule], (cart) => {
  const list = [];
  for (const cartElement in cart) {
    list.push({ ...Object.keys(cart[cartElement]), ...cart[cartElement] });
  }

  return list;
});
