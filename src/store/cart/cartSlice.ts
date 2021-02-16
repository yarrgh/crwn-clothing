import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../common/interfaces/cart-item";
import { Product } from "../../common/interfaces/product";
import { addItemToCart } from "./cart.utils";

interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state, _: PayloadAction) => {
      state.hidden = !state.hidden;
    },
    addCartItem: (state, action: PayloadAction<Product>) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
  },
});

export const { toggleCartHidden, addCartItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCartHidden = (state: any) =>
  (state.cart as CartState).hidden;

export const selectCartItems = (state: any) =>
  (state.cart as CartState).cartItems;
