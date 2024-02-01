import { createSelector } from "@reduxjs/toolkit";

export const selectCartModule = (state: any) => state.cart;

export const selectCartList = createSelector([selectCartModule], (cart) => {
  const list = [];
  for (const cartElement in cart) {
    const id = Object.keys(cart[cartElement]);
    list.push({ id, ...cart[cartElement] });
  }

  return list;
});
