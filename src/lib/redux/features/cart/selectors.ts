const selectCartModule = (state: any) => state.cart;

const selectProductAmount = (state: any, id: number) =>
  selectCartModule(state)[id] || 0;
