import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  hidden: boolean;
}

const initialState: CartState = {
  hidden: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state, action: PayloadAction) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { toggleCartHidden } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCartHidden = (state: any) =>
  (state.cart as CartState).hidden;
